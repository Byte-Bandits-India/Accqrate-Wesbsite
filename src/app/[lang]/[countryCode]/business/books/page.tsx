"use client";

import React from "react";
import Hero from "./sections/Hero";
import Section1 from "./sections/Section1"
import Section2 from "./sections/section2"
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";


export default function BusinessBooks() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
