// app/[countryCode]/page.tsx
import CountryPage from "@/components/CountryPage";
import { notFound } from "next/navigation";

// Define countries directly in the page to avoid import issues
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

// Option 1: Use the correct Next.js types
interface CountryPageProps {
    params: Promise<{
        countryCode: string;
    }>;
}

export function generateStaticParams() {
    return countries.map((country) => ({
        countryCode: country.code.toLowerCase(),
    }));
}

// Update the component to await params
export default async function CountryHomePage({ params }: CountryPageProps) {
    const { countryCode } = await params;

    // Validate country code
    const isValidCountry = countries.some(
        country => country.code.toLowerCase() === countryCode.toLowerCase()
    );

    if (!isValidCountry) {
        notFound();
    }

    return <CountryPage countryCode={countryCode.toUpperCase()} />;
}

// Update generateMetadata to also await params
export async function generateMetadata({ params }: CountryPageProps) {
    const { countryCode } = await params;
    const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());

    return {
        title: country ? `ACQRATE - ${country.name}` : 'ACQRATE',
        description: `Business and Retail Solutions for ${country?.name || 'your country'}`,
    };
}