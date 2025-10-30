"use client";

import T from "@/components/T";
import ZatcaPhaseTwoWavesData from "./ZatcaPhaseTwoWavesData";

export default function ZatcaPhaseTwoWaves() {
  return (
   
      <section className="zatca-space-two-waves">
        <div className="waves">
          <div className="waves-list-header">
            <div className="details text-center">
              <h4 className="mb-0">
                <T>Integration wave</T>
              </h4>
              <div className="eligibility">
                <h4 className="mb-0">
                  <T>Annual Revenues subject to VAT</T>
                </h4>
                <span className="d-block font-4">
                  <T>(Highest in 2022 or 2023)</T>
                </span>
              </div>
            </div>
            <div className="integration-period text-center">
              <div className="date">
                <h4 className="mb-0 font-weight-bold">
                  <T>Integration Deadline</T>
                </h4>
              </div>
            </div>
          </div>

          {ZatcaPhaseTwoWavesData.map((data, i) => (
            <div className="waves-list" key={i}>
              <div className="details text-center">
                <h3 className="mb-0">{data.title}</h3>
                <div className="eligibility">
                  <h4 className="text-primary mb-0">{data.eligibility}</h4>
                </div>
              </div>
              <div className="integration-period text-center">
                <div className="date">
                  <h5 className="mb-0 font-weight-bold">{data.gracePeriod}</h5>
                  {i === 0 && (
                    <span>
                      <T>
                        All the Taxpayers within these waves have to be integrated
                      </T>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
   
  );
}
