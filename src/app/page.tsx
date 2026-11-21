import React from "react";
import Hero from "../components/Hero";
import Onboard from "../components/Section1";
import AccountSections from "../components/Section2";
import AutomationSection from "../components/Section3";
export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Onboard />
      <AccountSections />
      <AutomationSection />
    </main>
  );
}
