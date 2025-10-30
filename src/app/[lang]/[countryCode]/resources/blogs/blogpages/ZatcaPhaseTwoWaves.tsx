"use client";

import T from "@/components/T";
import ZatcaPhaseTwoWavesData from "./ZatcaPhaseTwoWavesData";

export default function ZatcaPhaseTwoWaves() {
  return (
    <section className="zatca-phase-two-waves mb-8 max-w-[780px] mx-auto overflow-x-hidden px-2 sm:px-0">
      <div className="waves w-full">
        {/* Header */}
        <div className="waves-list-header flex justify-between items-center mb-4">
          <div className="details flex justify-between items-center w-full text-center">
            <div className="wave-title w-[15%] flex justify-center">
              <h4 className="mb-0 text-[10px] sm:text-[13px] md:text-[15px] font-bold font-['Inter']">
                <T>Integration wave</T>
              </h4>
            </div>

            <div className="eligibility flex-1 px-1 sm:px-3 md:px-4">
              <h4 className="mb-0 text-[10px] sm:text-[13px] md:text-[15px] font-bold font-['Inter'] leading-snug">
                <T>Annual Revenues subject to VAT</T>
              </h4>
              <span className="block text-[9px] sm:text-[11px] md:text-[12px] font-normal leading-[14px] text-[#5a6183]">
                <T>(Highest in 2022 or 2023)</T>
              </span>
            </div>

            <div className="integration-period w-[150px] sm:w-[190px] md:w-[214px] text-center">
              <h4 className="mb-0 font-bold text-[10px] sm:text-[13px] md:text-[16px] font-['Inter']">
                <T>Integration Deadline</T>
              </h4>
            </div>
          </div>
        </div>

        {/* Waves List */}
        {ZatcaPhaseTwoWavesData.map((data, i) => (
          <div
            key={i}
            className="waves-list flex justify-between items-center border-2 border-[#29256f] rounded-[8px] sm:rounded-[10px] mb-6 sm:mb-10 py-[10px] sm:py-[14px] md:py-[16px] px-1 sm:px-3 md:px-4 relative"
          >
            {/* Left details */}
            <div className="details flex justify-between items-center w-[calc(100%-170px)] sm:w-[calc(100%-200px)] md:w-[calc(100%-220px)] text-center">
              <h3 className="mb-0 w-[15%] text-[10px] sm:text-[14px] md:text-[18px] font-bold font-['Inter']">
                {data.title}
              </h3>

              <div className="eligibility flex-1 px-1 sm:px-3 md:px-4">
                <h4 className="text-[#194bed] mb-0 text-[9px] sm:text-[13px] md:text-[15px] lg:text-base font-bold font-['Inter'] leading-snug">
                  {data.eligibility}
                </h4>
              </div>
            </div>

            {/* Right card */}
            <div className="integration-period flex flex-col justify-center items-center bg-[#194bed] rounded-[8px] sm:rounded-[10px] text-white h-[60px] sm:h-[75px] md:h-[85px] min-w-[140px] sm:min-w-[180px] md:min-w-[214px] py-2 sm:py-3 md:py-3.5 px-2 sm:px-3 absolute right-2 md:right-6 text-center">
              <h5 className="mb-0 font-bold text-[9px] sm:text-[13px] md:text-[16px] font-['Inter']">
                {data.gracePeriod}
              </h5>
              {i === 0 && (
                <span className="text-[8px] sm:text-[11px] md:text-[12px] font-normal leading-[12px] sm:leading-[16px] md:leading-[18px] block mt-1">
                  <T>
                    All the Taxpayers within these <br /> waves have to be integrated
                  </T>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
