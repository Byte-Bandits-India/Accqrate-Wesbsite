"use client";

import React, { memo, useMemo } from "react";
import Attachments from "@/components/Attachments";
import type { TAttachment } from "./types";

// Define the FileData interface to match Attachments component
interface FileData {
  name: string;
  path: string;
  type?: string;
  size?: number;
}

interface FixedAttachmentProps extends TAttachment {
  title?: string;
}

const Attachment: React.FC<FixedAttachmentProps> = ({
  onChange,
  label,
  error,
  hideLabel,
  required,
  title = "Attach Files",
  value = [], // Default to empty array
  ...props
}) => {
  // Convert string[] value to FileData[] for Attachments component
  const fileDataValue = useMemo((): FileData[] => {
    return value.map(filePath => ({
      name: filePath.split('/').pop() || filePath, // Extract filename from path
      path: filePath,
      type: getFileType(filePath)
    }));
  }, [value]);

  // Helper function to determine file type from extension
  const getFileType = (filePath: string): string => {
    const extension = filePath.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(extension || '')) {
      return 'image';
    } else if (['pdf'].includes(extension || '')) {
      return 'application/pdf';
    } else if (['xls', 'xlsx', 'csv'].includes(extension || '')) {
      return 'application/vnd.ms-excel';
    }
    return '';
  };

  // Adapter function to convert Attachments file data to string array
  const handleUpload = (name: string, files: (FileData | File)[]) => {
    if (onChange) {
      // Convert to string array by extracting paths
      const stringFiles = files.map(file => {
        if (file instanceof File) {
          // For new files, you might want to handle upload first
          return file.name;
        } else {
          return file.path;
        }
      }).filter(Boolean);

      onChange(name, stringFiles);
    }
  };

  return (
    <div>
      {label && !hideLabel && (
        <label style={{ textAlign: "left", width: "fit-content" }}>
          {label} {required && <span className="required">*</span>}
        </label>
      )}

      <Attachments
        onUpload={handleUpload}
        title={title}
        value={fileDataValue}
        {...props}
      />

      {error && (
        <div style={{ fontSize: 10, color: "red", textAlign: "right" }}>
          {error.replace(props.name ?? "", label || "")}
        </div>
      )}
    </div>
  );
};

export default memo(Attachment);