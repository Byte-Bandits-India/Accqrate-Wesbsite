export interface FAQItem {
  question: string;
  answer: string;
}

export interface CountryFAQData {
  [key: string]: FAQItem[];
}

export type CountryCode = "SA" | "AE" | "OM" | "BH" | "MA" | "MU" | "JD";
