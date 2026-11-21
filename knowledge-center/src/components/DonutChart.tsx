"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Pie, PieChart, Sector, Cell } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import { ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export interface DonutChartData {
  label: string
  value: number
}

interface DonutChartProps {
  data: DonutChartData[]
  title?: string
  description?: string
  footerText?: string
  footerIcon?: LucideIcon
  footerDescription?: string
}

// Blue color palette for segments
const BLUE_COLORS = ["#60A5FA", "#3B82F6", "#1D4ED8", "#2563EB", "#3B82F6"]

// Chart configuration for the tooltip
const chartConfig = {
  value: {
    label: "Value",
  },
} satisfies ChartConfig

export const DonutChart = dynamic(
  () =>
    Promise.resolve(function DonutChartInner({
      data,
      title = "Donut Chart",
      description,
      footerText,
      footerIcon: FooterIcon,
      footerDescription,
    }: DonutChartProps) {
      const [activeIndex, setActiveIndex] = useState(0);

      // Assign colors explicitly for Sale Value and VAT Amount
      const COLORS = {
        "Sale Value": "#3E6CFF",
        "VAT Amount": "#29266E",
      };

      const chartData = data.map((item, index) => ({
        ...item,
        fill: item.label === "Sale Value" ? "#3E6CFF" : "#29266E", // Set colors here
      }))


      return (
        <Card className="flex flex-col h-full w-full">
          <CardHeader className="flex-shrink-0"></CardHeader>
          <CardContent className="flex-1 flex items-center justify-center pb-0">
            <ChartContainer
              config={chartConfig}
              className="w-full aspect-square md:h-[400px] lg:h-full mx-auto"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="label"
                    innerRadius="60%"
                    outerRadius="85%"
                    strokeWidth={20}
                    activeIndex={activeIndex}
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                      <Sector {...props} outerRadius={outerRadius + 10} />
                    )}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>

          <CardFooter className="flex-shrink-0 flex-col gap-2 text-sm">
            <div className="flex items-center gap-4">
              {/* Sale Value */}
              <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full bg-[#3E6CFF]"></div>
                <span className="leading-none font-medium text-fluid-body">Sale Value</span>
              </div>

              {/* VAT Amount */}
              <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] rounded-full bg-[#29266E]"></div>
                <span className="leading-none font-medium text-fluid-body">VAT Amount</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      );
    }),
  { ssr: false }
);
