"use client"
import { DonutChart, DonutChartData } from "@/components/DonutChart"
import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export default function VATCalculator() {
    const vatData: DonutChartData[] = [
        { label: "VAT Collected", value: 1200 },
        { label: "VAT Paid", value: 800 },
        { label: "Exempt", value: 400 },
        { label: "test", value: 400 },
        { label: "Exempt", value: 400 },
    ]

    const [isVATInclusive, setIsVATInclusive] = useState<"yes" | "no">("no")
    const [saleValue, setSaleValue] = useState("816618")
    const [vatRate, setVatRate] = useState("24.4")
    const [answer, setAnswer] = useState("yes")

    // Calculate VAT amounts
    const saleValueNum = parseFloat(saleValue) || 0
    const vatRateNum = parseFloat(vatRate) || 0
    const vatDecimal = vatRateNum / 100

    let vatAmount = 0
    let totalAmount = 0

    if (isVATInclusive === "yes") {
        // VAT is included in sale value
        vatAmount = saleValueNum * (vatDecimal / (1 + vatDecimal))
        totalAmount = saleValueNum
    } else {
        // VAT is exclusive of sale value
        vatAmount = saleValueNum * vatDecimal
        totalAmount = saleValueNum + vatAmount
    }

    return (

        <>
            <div className="bg-[#F8F6FF]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-8 pt-[80px] pb-[80px]">
                    <h1 className="text-[20px] md:text-[32px] lg:text-[50px] font-medium pb-[30px] md:pb-[37px] text-[#29266E] tracking-heading leading-tight">Vat Calculator</h1>
                    <div className="lg:flex items-stretch justify-evenly font-inter space-y-6 lg:space-y-0 lg:gap-[35px]"> {/* Changed gap to 35px */}
                        {/* Donut Chart Card - Fixed width */}
                        <div className="lg:max-w-[310px] xl:max-w-[450px] w-full">
                            <DonutChart
                                data={vatData}
                                footerText="Total VAT this month"
                                footerIcon={TrendingUp}
                                footerDescription="Showing VAT breakdown for the current month"
                            />
                        </div>

                        {/* VAT Calculator Form - Full width */}
                        <div className=" max-w-[1000px] w-full">
                            <Card className="p-4 lg:p-6 h-full">
                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                    {/* First Field */}
                                    <div className="flex flex-col">
                                        <h3 className="text-[#333333] text-fluid-body mb-2">Sale Value</h3>
                                        <Input
                                            type="text"
                                            className="pl-4 text-lg font-medium h-12 bg-[#F5F5FF] w-full border-[#29266E] rounded"
                                        />
                                        <Slider defaultValue={[33]} max={100} step={1} className="pt-4 lg:pt-[35px]" />
                                    </div>

                                    {/* Second Field */}
                                    <div className="flex flex-col">
                                        <h3 className="text-[#333333] text-fluid-body mb-2">VAT Value (%)</h3>
                                        <div className="relative w-full">
                                            {/* The % badge */}
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#194BED] text-white text-[12px] font-semibold rounded-full h-[25px] w-[25px] flex items-center justify-center">
                                                %
                                            </span>

                                            {/* The Input */}
                                            <Input
                                                type="text"
                                                className="pl-12 text-lg font-medium h-12 bg-[#F5F5FF] w-full border-[#29266E] rounded"
                                            />
                                        </div>

                                        <Slider defaultValue={[33]} max={100} step={1} className="pt-4 lg:pt-[35px]" />
                                    </div>

                                    {/* VAT Inclusive Question */}
                                    <div className="lg:col-span-2">
                                        <p className="text-fluid-small lg:text-[16px] mt-6 lg:mt-[47px] text-[#333333]">Is Sale Inclusive of VAT ?</p>
                                        <RadioGroup
                                            value={answer}
                                            onValueChange={setAnswer}
                                            className="flex gap-6 mt-[28px]"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="yes" id="yes" />
                                                <Label htmlFor="yes">Yes</Label>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="no" id="no" />
                                                <Label htmlFor="no">No</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div className="mt-[42px] max-w-[399px] w-full">
                                        {/* Title */}
                                        <h3 className="font-semibold text-fluid-body text-[#333333] mb-2">Sale Value:</h3>

                                        {/* Row - Label and Value */}
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-fluid-small lg:text-[16px] text-[#717171]">
                                                Exclusive of VAT
                                            </p>
                                            <p className="text-fluid-body text-[#333333]">
                                                SAR <span className="font-bold">816,618</span>
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="border-t border-[#DFDFDF] w-full"></div>
                                        <div className="flex items-center justify-between mb-2 mt-[30px]">
                                            <p className="text-fluid-small lg:text-[16px] font-semibold text-[#717171]">
                                                VAT Amount:
                                            </p>
                                            <p className="text-fluid-body text-[#333333]">
                                                SAR <span className="font-bold">282549.83</span>
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="border-t border-[#DFDFDF] w-full"></div>
                                        <div className="flex items-center justify-between mb-2 mt-[30px]">
                                            <p className="text-fluid-small lg:text-[16px] font-semibold text-[#333333]">
                                                Total Value:
                                            </p>
                                            <p className="text-fluid-body text-[#333333]">
                                                SAR <span className="font-bold">1099167.828</span>
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="border-t border-[#DFDFDF] w-full"></div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="max-w-[1094px] mx-auto">
                        <div className="text-[#000000] mt-[80px]">
                            <h2 className="text-fluid-body font-semibold">Simplify VAT Calculations with Our KSA VAT Calculator</h2>
                            <p className="text-fluid-small mt-[25px]">Navigating VAT calculations has never been easier. Our KSA VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.</p>
                        </div>
                        <div>
                            <h2 className="text-fluid-body font-semibold mt-[30px]">What Is VAT?</h2>
                            <p className="text-fluid-small mt-[25px]">Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in KSA in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.</p>
                        </div>
                        <div>
                            <h2 className="text-fluid-body font-semibold mt-[30px]">How to Calculate VAT in KSA</h2>
                            <p className="text-fluid-small mt-[25px]">Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:</p>
                            <div className="pl-4">
                                <ul className="list-disc pl-6 space-y-1 text-fluid-small text-[#555555]">
                                    <li>Adding VAT: Perfect for when sales are exclusive of VAT.</li>
                                    <li>Excluding VAT: Ideal for sales prices that already include VAT.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-fluid-body font-semibold mt-[30px]">VAT Calculation Made Simple</h2>
                            <p className="text-fluid-small mt-[25px]">With our KSA VAT Calculator, enjoy:</p>
                            <div className="pl-4">
                                <ul className="list-disc pl-6 space-y-1 text-fluid-small text-[#555555]">
                                    <li>Instant Calculations: Quick and straightforward VAT computations.</li>
                                    <li>Accuracy: Precise invoicing every time.</li>
                                    <li>Error Reduction: Minimize manual calculation mistakes.</li>
                                    <li>Time Savings: Spend less time on math and more on your business.</li>
                                </ul>
                            </div>
                            <p className="text-fluid-small mt-[25px]">Leverage our VAT calculator for hassle-free tax calculations, ensuring your business stays compliant and efficient.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}