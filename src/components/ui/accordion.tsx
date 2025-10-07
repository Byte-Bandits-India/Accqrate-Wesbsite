"use client";

import * as React from "react";
import FadeUp from "../ui/FadeUp"
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "../../lib/utils";

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
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-3 text-sm font-normal transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-6 w-6 shrink-0 text-[#979797] transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

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

// ✅ Define props for AccordionCard
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
            <img src={icon} alt={`${title} Icon`} className="w-[40px] h-[40px]" />
            <span className="tracking-heading text-[#333333] text-left font-medium  text-[18px]">
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
