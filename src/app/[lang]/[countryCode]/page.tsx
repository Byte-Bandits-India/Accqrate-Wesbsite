// app/[lang]/[countryCode]/page.tsx
import CountryPage from "@/components/CountryPage";
import { notFound } from "next/navigation";

const countries = [
    {
        name: "Saudi Arabia",
        code: "SA",
        flag: "/images/header/language/flag-saudi-arabia.svg",
        language: "Arabic",
        currency: "SAR",
    },
    {
        name: "UAE",
        code: "AE",
        flag: "/images/header/language/flag-uae.svg",
        language: "Arabic",
        currency: "AED",
    },
    {
        name: "Oman",
        code: "OM",
        flag: "/images/header/language/flag-oman.svg",
        language: "Arabic",
        currency: "OMR",
    },
    {
        name: "Bahrain",
        code: "BH",
        flag: "/images/header/language/flag-bahrain.svg",
        language: "Arabic",
        currency: "BHD",
    },
    {
        name: "Malaysia",
        code: "MA",
        flag: "/images/header/language/flag-malaysia.svg",
        language: "Malay",
        currency: "MYR",
    },
    {
        name: "Mauritius",
        code: "MU",
        flag: "/images/header/language/flag-mauritius.svg",
        language: "English",
        currency: "MUR",
    },
    {
        name: "Jordan",
        code: "JD",
        flag: "/images/header/language/flag-jordan.svg",
        language: "Arabic",
        currency: "JOD",
    },
];

// Define supported languages as a type
type SupportedLanguage = 'en' | 'ar';

interface CountryPageProps {
    params: Promise<{
        lang: string;
        countryCode: string;
    }>;
}

export async function generateStaticParams() {
    const supportedLanguages: SupportedLanguage[] = ['en', 'ar'];
    const params = [];

    for (const lang of supportedLanguages) {
        for (const country of countries) {
            params.push({
                lang,
                countryCode: country.code.toLowerCase(),
            });
        }
    }

    return params;
}

export default async function CountryHomePage({ params }: CountryPageProps) {
    const { lang, countryCode } = await params;

    // Validate language and country code with proper typing
    const isValidLanguage = (lang: string): lang is SupportedLanguage => {
        return ['en', 'ar'].includes(lang);
    };

    const isValidCountry = countries.some(
        country => country.code.toLowerCase() === countryCode.toLowerCase()
    );

    if (!isValidLanguage(lang) || !isValidCountry) {
        notFound();
    }

    // Only pass countryCode to CountryPage since that's what it expects
    return <CountryPage countryCode={countryCode.toUpperCase()} />;
}

export async function generateMetadata({ params }: CountryPageProps) {
    const { lang, countryCode } = await params;
    const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());

    return {
        title: country ? `ACQRATE - ${country.name}` : 'ACQRATE',
        description: `Business and Retail Solutions for ${country?.name || 'your country'}`,
    };
}