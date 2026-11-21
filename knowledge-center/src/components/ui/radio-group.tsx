"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn("grid gap-4", className)}
            {...props}
            ref={ref}
        />
    )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "relative flex items-center justify-center",
                "h-auto w-[16px] rounded-full border-[1px] border-[#29266E] text-[#29266E]",
                "ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
                "data-[state=checked]:border-[#194BED]",
                className
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
                {/* Inner circle - slightly larger */}
                <span className="block h-[10px] w-[10px] rounded-full bg-[#194BED]" />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>

    )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// Custom wrapper for radio options with labels
interface RadioOptionProps {
    value: string
    label: string
    description?: string
    className?: string
}

const RadioOption = React.forwardRef<
    React.ElementRef<"div">,
    RadioOptionProps & React.ComponentPropsWithoutRef<"div">
>(({ value, label, description, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer",
                "data-[state=checked]:border-[#29266E] data-[state=checked]:bg-[#F5F5FF]",
                className
            )}
            {...props}
        >
            <RadioGroupItem value={value} id={value} />
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor={value}
                    className="text-sm font-medium text-gray-900 cursor-pointer"
                >
                    {label}
                </label>
                {description && (
                    <p className="text-sm text-gray-500">{description}</p>
                )}
            </div>
        </div>
    )
})
RadioOption.displayName = "RadioOption"

export { RadioGroup, RadioGroupItem, RadioOption }