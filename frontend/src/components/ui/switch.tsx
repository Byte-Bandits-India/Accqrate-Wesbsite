"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, defaultChecked = true, onCheckedChange, ...props }, ref) => {
  const [checked, setChecked] = React.useState(defaultChecked)

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked)
    onCheckedChange?.(newChecked)
  }

  return (
    <SwitchPrimitives.Root
      ref={ref}
      checked={checked}
      onCheckedChange={handleChange}
      className={cn(
        "peer relative inline-flex h-[40px] w-[296px] cursor-pointer items-center rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#194BED]/40 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Thumb - exact same dimensions as outer container */}
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none absolute block h-[40px] w-[148px] rounded-full bg-[linear-gradient(90deg,#194BED_0%,#29266E_100%)] transition-transform duration-200",
          checked ? "translate-x-0" : "translate-x-[148px]"
        )}
      />

      {/* Labels */}
      <div className="flex w-full z-10 relative">
        <span
          className={cn(
            "flex-1 text-center text-[14px] md:text-[16px] tracking-para leading-tight font-medium transition-colors duration-200",
            checked ? "text-white" : "text-black"
          )}
        >
          Accqrate ONE
        </span>
        <span
          className={cn(
            "flex-1 text-center text-[14px] md:text-[16px] tracking-para leading-tight font-medium transition-colors duration-200",
            checked ? "text-black" : "text-white"
          )}
        >
          Deployment
        </span>
      </div>
    </SwitchPrimitives.Root>
  )
})

Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }