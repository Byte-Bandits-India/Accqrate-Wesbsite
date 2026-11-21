"use client";

import React, { memo, useEffect, useState } from "react";
import { message, Upload, UploadProps } from "antd";
import { Trash } from "lucide-react";
import apiClient from "@/components/Util/apiClient";
import { getDocPath } from "../Util/Util";
import type { StaticImageData } from "next/image";
import "./Component.scss";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface FileData {
  name: string;
  path: string;
  type?: string;
  size?: number;
}

interface ImageProps {
  data: FileData;
  disabled?: boolean;
  onClear: (file: FileData) => void;
}

export interface AttachmentsProps {
  title?: string;
  name?: string;
  description?: string;
  acceptFile?: ("excel" | "pdf" | "image")[];
  endPoint?: string;
  onUpload?: (name: string, files: FileData[] | File[]) => void;
  value?: (FileData | File)[];
  disabled?: boolean;
  readOnly?: boolean;
  fileObj?: boolean;
  fileLength?: number;
  size?: number;
  noPreview?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                Constants                                   */
/* -------------------------------------------------------------------------- */

const headers = {
  Accept: "application/x-www-form-urlencoded",
  "Content-Type": "application/x-www-form-urlencoded",
  "cache-control": "no-cache",
};

const formats: Record<string, string> = {
  excel:
    ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
  pdf: "application/pdf",
  image: "image/png, image/jpeg",
};

const fileIcons: Record<string, string> = {
  excel: "flaticon-csv-file-format-extension",
  pdf: "flaticon-pdf",
  image: "flaticon-image-gallery",
};

/* -------------------------------------------------------------------------- */
/*                               File Icons                                   */
/* -------------------------------------------------------------------------- */

// use public folder paths (✅ no import needed)
const displayIcons: Record<string, string> = {
  "application/pdf": "/images/pdf.png",
  "image/png": "/images/image.png",
  "image/jpeg": "/images/image.png",
  "application/vnd.ms-excel": "/images/excel.png",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "/images/excel.png",
  ".csv": "/images/excel.png",
};

// fallback icon
const defaultImageIcon = "/images/image.png";

const getIconSrc = (type?: string): string => {
  return displayIcons[type || ""] || defaultImageIcon;
};

/* -------------------------------------------------------------------------- */
/*                        Helper Functions for Files                          */
/* -------------------------------------------------------------------------- */

const separateFiles = (files: (FileData | File)[]): { fileData: FileData[]; fileObjects: File[] } => {
  const fileData: FileData[] = [];
  const fileObjects: File[] = [];

  files.forEach((file) => {
    if (file instanceof File) {
      fileObjects.push(file);
    } else {
      fileData.push(file);
    }
  });

  return { fileData, fileObjects };
};

const toUploadFiles = (files: (FileData | File)[]): FileData[] | File[] => {
  const { fileData, fileObjects } = separateFiles(files);

  if (fileData.length && !fileObjects.length) return fileData;
  if (fileObjects.length && !fileData.length) return fileObjects;

  // mixed case — normalize
  return files.map((file) =>
    file instanceof File
      ? {
        name: file.name,
        path: URL.createObjectURL(file),
        type: file.type,
        size: file.size,
      }
      : file
  );
};

/* -------------------------------------------------------------------------- */
/*                                  Image                                     */
/* -------------------------------------------------------------------------- */

export const Image: React.FC<ImageProps> = ({ data, disabled, onClear }) => {
  const [src, setSrc] = useState<string>(getIconSrc(data.type));

  useEffect(() => {
    if (data.type?.startsWith?.("image")) {
      if (data.path.startsWith("accqrate-documents")) {
        apiClient
          .get(data.path, { responseType: "blob" })
          .then((response) => {
            if (response.status === 200) {
              const url = window.URL.createObjectURL(response.data as Blob);
              setSrc(url);
            }
          })
          .catch(() => {
            // Silent fail
          });
      } else {
        const docPath = getDocPath(data.path);
        setSrc(docPath);
      }
    }
  }, [data.path, data.type]);

  const onDownload = () => {
    const url = data.type?.startsWith?.("image") ? src : getDocPath(data.path);
    if (url) window.open(url, "_blank")?.focus();
  };

  return (
    <div className="file-content">
      {!disabled && (
        <div className="clear-icon" onClick={() => onClear(data)}>
          <Trash size={16} />
        </div>
      )}
      <img alt="file" title={data.name} src={src} onClick={onDownload} />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               Attachments                                  */
/* -------------------------------------------------------------------------- */

const Attachments: React.FC<AttachmentsProps> = ({
  title = "",
  name = "",
  description = "",
  acceptFile = ["image"],
  endPoint = "companies/uploadTempDocuments",
  onUpload,
  value = [],
  disabled = false,
  readOnly = false,
  fileObj = false,
  fileLength = 3,
  size = 5,
  noPreview = false,
}) => {
  const [attachments, setAttachments] = useState<(FileData | File)[]>(value);

  useEffect(() => {
    if (value.length > 0) setAttachments(value);
  }, [value]);

  const onFileChange: UploadProps["customRequest"] = async (options) => {
    const { file, onSuccess, onError } = options;
    const uploadFile = file as File;
    const fileSize = uploadFile.size / 1024 / 1024;

    if (attachments.length >= fileLength || fileSize > size) {
      message.error(
        attachments.length >= fileLength
          ? `Number of files exceeds ${fileLength}`
          : `File size exceeds ${size} MB`
      );
      onError?.(new Error("File validation failed"));
      return;
    }

    if (fileObj) {
      const newAttachments = [...attachments, uploadFile];
      setAttachments(newAttachments);
      onUpload?.(name, toUploadFiles(newAttachments));
      onSuccess?.("ok");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("document", uploadFile);

    try {
      const response = await apiClient.post<{ result: FileData[] }>(endPoint, uploadData, { headers });

      const uploadedFile = response.data?.result?.[0];
      if (uploadedFile) {
        const newFileData: FileData = {
          name: uploadedFile.name || uploadFile.name,
          path: uploadedFile.path || "",
          type: uploadedFile.type || uploadFile.type,
          size: uploadedFile.size || uploadFile.size,
        };

        const newAttachments = [...attachments, newFileData];
        setAttachments(newAttachments);
        onUpload?.(name, toUploadFiles(newAttachments));
        onSuccess?.("ok");
      }
    } catch (error) {
      message.error("File upload failed.");
      onError?.(error as Error);
    }
  };

  const onClear = (file: FileData) => {
    const files = attachments.filter((v) =>
      v instanceof File ? v.name !== file.name : (v as FileData).name !== file.name
    );
    setAttachments(files);
    onUpload?.(name, toUploadFiles(files));
  };

  const accept = acceptFile.map((v) => formats[v] || "").join(", ");

  const previewFile = async (file: File | Blob): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="attachments-area">
      {!readOnly && (
        <Upload
          previewFile={previewFile}
          fileList={[]}
          accept={accept}
          customRequest={onFileChange}
          disabled={disabled}
        >
          <div className="attachments-drop-area">
            <div>
              {acceptFile.map((v, i) => (
                <i key={i} className={fileIcons[v]} style={{ fontSize: 30, margin: 10 }} />
              ))}
            </div>
            <b>{title}</b>
            <div>{description || `You can upload up to ${fileLength} files (${size} MB each)`}</div>
          </div>
        </Upload>
      )}

      {!noPreview && (
        <div className="attachments-files">
          {attachments.map((v, i) => {
            const fileData: FileData =
              v instanceof File
                ? {
                  name: v.name,
                  path: URL.createObjectURL(v),
                  type: v.type,
                  size: v.size,
                }
                : (v as FileData);

            return <Image key={i} data={fileData} disabled={disabled} onClear={onClear} />;
          })}
        </div>
      )}
    </div>
  );
};

export default memo(Attachments);
