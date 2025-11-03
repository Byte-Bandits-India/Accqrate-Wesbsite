"use client";

import * as React from "react";
import FadeUp from "@/components/ui/FadeUp";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react"; // ✅ use lucide-react icons
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-3 text-sm font-normal transition-all text-left hover:no-underline",
        className
      )}
      {...props}
    >
      {children}

      {/* Morphing + / - Animation */}
      <span className="relative ml-3 flex items-center justify-center w-6 h-6">
        {/* Horizontal line (stays visible) */}
        <span
          className={cn(
            "absolute block w-4 h-[2px] bg-[#333333] rounded transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            "group-data-[state=open]:rotate-0 rotate-0"
          )}
        ></span>

        {/* Vertical line (rotates and fades out to form minus) */}
        <span
          className={cn(
            "absolute block h-4 w-[2px] bg-[#333333] rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            "group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0 rotate-0 opacity-100"
          )}
        ></span>
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));


const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// ✅ AccordionCard
interface AccordionCardProps {
  value: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

function AccordionCard({ value, icon, title, content }: AccordionCardProps) {
  return (
    <FadeUp>
      <AccordionItem
        value={value}
        className="flex flex-col justify-center bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8]
        w-full h-auto rounded-lg px-4"
      >
        <AccordionTrigger className="flex justify-between items-start w-full hover:no-underline">
          <div className="flex flex-col items-start gap-[20px] px-4 sm:px-2">
            <img
              src={icon}
              alt={`${title} Icon`}
              className="w-[40px] h-[40px]"
            />
            <span className="tracking-heading text-[#333333] text-left font-medium text-[18px]">
              {title}
            </span>
          </div>
        </AccordionTrigger>

        <AccordionContent className="px-4 tracking-para pb-2 text-gray-700 text-sm">
          {content}
        </AccordionContent>
      </AccordionItem>
    </FadeUp>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionCard,
};
