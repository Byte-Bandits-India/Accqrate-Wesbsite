"use client";

import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronsUpDown, Check } from "lucide-react";

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    label?: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    error?: string | false | undefined;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    options,
    value,
    onChange,
    error,
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium mb-1">{label}</label>
            )}

            <Listbox value={value} onChange={onChange}>
                <div className="relative">
                    <Listbox.Button
                        className="
              relative w-full cursor-default rounded-md bg-white border border-gray-300 
              py-2.5 pl-3 pr-10 text-left text-gray-800 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-[#194BED]/40 focus:border-[#194BED]
              transition-all
            "
                    >
                        <span className="block truncate">{value || "Select Module"}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <ChevronsUpDown className="h-5 w-5 text-gray-400" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className="
                absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md 
                py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none
              "
                        >
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.value}
                                    value={option.value}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                            ? "bg-[#F2F4FF] text-[#194BED]"
                                            : "text-gray-900"
                                        }`
                                    }
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? "font-medium" : "font-normal"
                                                    }`}
                                            >
                                                {option.label}
                                            </span>
                                            {selected && (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#194BED]">
                                                    <Check className="h-4 w-4" />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};
