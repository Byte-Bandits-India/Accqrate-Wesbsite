"use client";

import { useState, useEffect } from "react";
import { DonutChart, DonutChartData } from "@/components/DonutChart";
import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import AOS from "aos";
import "aos/dist/aos.css";
import ZatcaSection from "./ZatcaSection";

export default function VATCalculator() {
  const [hydrated, setHydrated] = useState(false);
  const [saleValue, setSaleValue] = useState("816618");
  const [vatRate, setVatRate] = useState("24.4");
  const [isVATInclusive, setIsVATInclusive] = useState<"yes" | "no">("no");

  useEffect(() => {
    setHydrated(true); // Ensure client-side rendering for dynamic values
    AOS.init({ once: true, duration: 800 });
  }, []);

  // Parsed numeric values
  const saleValueNum = parseFloat(saleValue) || 0;
  const vatRateNum = parseFloat(vatRate) || 0;
  const vatDecimal = vatRateNum / 100;

  // Calculations
  let vatAmount = 0;
  let totalAmount = 0;

  if (isVATInclusive === "yes") {
    vatAmount = saleValueNum * (vatDecimal / (1 + vatDecimal));
    totalAmount = saleValueNum;
  } else {
    vatAmount = saleValueNum * vatDecimal;
    totalAmount = saleValueNum + vatAmount;
  }

  // Donut chart data
  const vatData: DonutChartData[] = [
    { label: "VAT Amount", value: vatAmount },
    { label: "Sale Value", value: saleValueNum },
  ];

  return (
    <div className="bg-[#F8F6FF]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 pt-[80px] pb-[80px]">
        <h1
          className="text-[20px] md:text-[32px] lg:text-[50px] font-medium pb-[30px] md:pb-[37px] text-[#29266E] tracking-heading leading-tight"
          data-aos="fade-up"
        >
          VAT Calculator
        </h1>

        <div className="lg:flex items-stretch justify-evenly font-inter space-y-6 lg:space-y-0 lg:gap-[35px]">
          {/* Donut Chart Card */}
          <div
            className="lg:max-w-[310px] xl:max-w-[450px] w-full"
            data-aos="fade-up"
          >
            <DonutChart
              data={vatData}
              footerText="Total VAT this month"
              footerIcon={TrendingUp}
              footerDescription="Showing VAT breakdown for the current month"
            />
          </div>

          {/* VAT Calculator Form */}
          <div className="max-w-[1000px] w-full" data-aos="fade-up">
            <Card className="p-4 lg:p-6 h-full">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {/* Sale Value */}
                <div className="flex flex-col">
                  <h3 className="text-[#333333] text-fluid-body mb-2">Sale Value</h3>
                  <Input
                    type="text"
                    value={saleValue}
                    onChange={(e) =>
                      setSaleValue(e.target.value.replace(/[^0-9.]/g, ""))
                    }
                    className="pl-4 text-lg font-medium h-12 bg-[#F5F5FF] w-full border-[#29266E] rounded"
                  />
                  <Slider
                    value={[saleValueNum]}
                    min={0}
                    max={1000000}
                    step={1}
                    onValueChange={(val) => setSaleValue(val.toString())}
                    className="pt-4 lg:pt-[35px]"
                  />
                </div>

                {/* VAT Rate */}
                <div className="flex flex-col">
                  <h3 className="text-[#333333] text-fluid-body mb-2">VAT Rate (%)</h3>
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#194BED] text-white text-[12px] font-semibold rounded-full h-[25px] w-[25px] flex items-center justify-center">
                      %
                    </span>
                    <Input
                      type="text"
                      value={vatRate}
                      onChange={(e) =>
                        setVatRate(e.target.value.replace(/[^0-9.]/g, ""))
                      }
                      className="pl-12 text-lg font-medium h-12 bg-[#F5F5FF] w-full border-[#29266E] rounded"
                    />
                  </div>
                  <Slider
                    value={[vatRateNum]}
                    min={0}
                    max={100}
                    step={0.1}
                    onValueChange={(val) => setVatRate(val.toString())}
                    className="pt-4 lg:pt-[35px]"
                  />
                </div>

                {/* VAT Inclusive Question */}
                <div className="lg:col-span-2">
                  <p className="text-fluid-small lg:text-[16px] mt-6 lg:mt-[47px] text-[#333333]">
                    Is Sale Inclusive of VAT?
                  </p>
                  <RadioGroup
                    value={isVATInclusive}
                    onValueChange={(val) =>
                      setIsVATInclusive(val as "yes" | "no")
                    }
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

                {/* Results */}
                <div className="mt-[42px] max-w-[399px] w-full lg:col-span-2">
                  <h3 className="font-semibold text-fluid-body text-[#333333] mb-2">
                    Sale Value:
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-fluid-small lg:text-[16px] text-[#717171]">
                      {isVATInclusive === "yes" ? "Inclusive of VAT" : "Exclusive of VAT"}
                    </p>
                    <p className="text-fluid-body text-[#333333]">
                      SAR{" "}
                      <span className="font-bold">
                        {hydrated ? saleValueNum.toLocaleString() : saleValueNum}
                      </span>
                    </p>
                  </div>

                  <div className="border-t border-[#DFDFDF] w-full"></div>
                  <div className="flex items-center justify-between mb-2 mt-[30px]">
                    <p className="text-fluid-small lg:text-[16px] font-semibold text-[#717171]">
                      VAT Amount:
                    </p>
                    <p className="text-fluid-body text-[#333333]">
                      SAR{" "}
                      <span className="font-bold">
                        {hydrated ? vatAmount.toFixed(2) : vatAmount}
                      </span>
                    </p>
                  </div>

                  <div className="border-t border-[#DFDFDF] w-full"></div>
                  <div className="flex items-center justify-between mb-2 mt-[30px]">
                    <p className="text-fluid-small lg:text-[16px] font-semibold text-[#333333]">
                      Total Value:
                    </p>
                    <p className="text-fluid-body text-[#333333]">
                      SAR{" "}
                      <span className="font-bold">
                        {hydrated ? totalAmount.toFixed(2) : totalAmount}
                      </span>
                    </p>
                  </div>
                  <div className="border-t border-[#DFDFDF] w-full"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Text Sections with AOS */}
        <div className="max-w-[1094px] mx-auto mt-[80px]" data-aos="fade-up">
          <h2 className="text-fluid-body font-semibold">Simplify VAT Calculations with Our KSA VAT Calculator</h2>
          <p className="text-fluid-small mt-[25px]">
            Navigating VAT calculations has never been easier. Our KSA VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.
          </p>
        </div>

        <div className="max-w-[1094px] mx-auto mt-[30px]" data-aos="fade-up">
          <h2 className="text-fluid-body font-semibold">What Is VAT?</h2>
          <p className="text-fluid-small mt-[25px]">
            Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in KSA in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.
          </p>
        </div>

        <div className="max-w-[1094px] mx-auto mt-[30px]" data-aos="fade-up">
          <h2 className="text-fluid-body font-semibold">How to Calculate VAT in KSA</h2>
          <p className="text-fluid-small mt-[25px]">
            Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-fluid-small text-[#555555] mt-2">
            <li>Adding VAT: Perfect for when sales are exclusive of VAT.</li>
            <li>Excluding VAT: Ideal for sales prices that already include VAT.</li>
          </ul>
        </div>

        <div className="max-w-[1094px] mx-auto mt-[30px]" data-aos="fade-up">
          <h2 className="text-fluid-body font-semibold">VAT Calculation Made Simple</h2>
          <p className="text-fluid-small mt-[25px]">With our KSA VAT Calculator, enjoy:</p>
          <ul className="list-disc pl-6 space-y-1 text-fluid-small text-[#555555] mt-2">
            <li>Instant Calculations: Quick and straightforward VAT computations.</li>
            <li>Accuracy: Precise invoicing every time.</li>
            <li>Error Reduction: Minimize manual calculation mistakes.</li>
            <li>Time Savings: Spend less time on math and more on your business.</li>
          </ul>
          <p className="text-fluid-small mt-[25px]">
            Leverage our VAT calculator for hassle-free tax calculations, ensuring your business stays compliant and efficient.
          </p>
        </div>
       
      </div>
       <ZatcaSection />
    </div>
  );
}
