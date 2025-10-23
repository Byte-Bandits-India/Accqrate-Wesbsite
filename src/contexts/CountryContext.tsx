// contexts/CountryContext.tsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

// ===================== Type Definitions =====================
export interface Country {
    name: string;
    code: string;
    flag: string;
    language: string;
    currency: string;
}

export interface Language {
    code: string;
    name: string;
    display: string;
}

// ===================== Data =====================
export const countries: Country[] = [
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

export const languages: Language[] = [
    { code: "ar", name: "Arabic", display: "العربية" },
    { code: "ml", name: "Malay", display: "Malay" },
    { code: "en", name: "English", display: "English" },
];

// ===================== Context Type =====================
interface CountryContextType {
    selectedCountry: Country;
    setSelectedCountry: (country: Country) => void;
    selectedLanguage: Language;
    setSelectedLanguage: (lang: Language) => void;
    countries: Country[];
    languages: Language[];
    isInitialized: boolean;
}

// ===================== Create Context =====================
const CountryContext = createContext<CountryContextType | undefined>(undefined);

// ===================== Helper Functions =====================
const getDefaultCountry = (): Country => {
    return countries.find(country => country.code === "SA")!;
};

// ===================== Provider =====================
export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isInitialized, setIsInitialized] = useState(false);

    // Get country code from pathname
    const getCountryFromPath = (): Country => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const countryCode = pathSegments[0]?.toUpperCase();
        const countryFromPath = countries.find(country => country.code === countryCode);
        return countryFromPath || getDefaultCountry();
    };

    const [selectedCountry, setSelectedCountryState] = useState<Country>(() => {
        return getDefaultCountry(); // Always start with SA as default
    });

    const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
        return languages.find(lang => lang.code === "ar") || languages[0];
    });

    // Sync context with route changes
    useEffect(() => {
        const countryFromPath = getCountryFromPath();
        if (countryFromPath.code !== selectedCountry.code) {
            setSelectedCountryState(countryFromPath);
        }
    }, [pathname]);

    // Initialize from localStorage only on client after mount
    useEffect(() => {
        const initializeFromStorage = () => {
            if (typeof window !== "undefined") {
                const savedCountry = localStorage.getItem("selectedCountry");
                const savedLanguage = localStorage.getItem("selectedLanguage");

                const countryFromPath = getCountryFromPath();

                if (savedCountry) {
                    const parsedCountry = JSON.parse(savedCountry);
                    // Only use saved country if it matches current route
                    if (parsedCountry.code === countryFromPath.code) {
                        setSelectedCountryState(parsedCountry);
                    }
                }

                if (savedLanguage) {
                    const parsedLanguage = JSON.parse(savedLanguage);
                    setSelectedLanguage(parsedLanguage);
                }
            }
            setIsInitialized(true);
        };

        initializeFromStorage();
    }, []);

    // Navigate to country-specific route
    const navigateToCountry = (country: Country) => {
        const newPath = `/${country.code.toLowerCase()}`;
        router.push(newPath);
        setSelectedCountryState(country);
    };

    // Persist to localStorage
    useEffect(() => {
        if (isInitialized && typeof window !== "undefined") {
            localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry));
        }
    }, [selectedCountry, isInitialized]);

    useEffect(() => {
        if (isInitialized && typeof window !== "undefined") {
            localStorage.setItem("selectedLanguage", JSON.stringify(selectedLanguage));
        }
    }, [selectedLanguage, isInitialized]);

    return (
        <CountryContext.Provider
            value={{
                selectedCountry,
                setSelectedCountry: navigateToCountry,
                selectedLanguage,
                setSelectedLanguage,
                countries,
                languages,
                isInitialized,
            }}
        >
            {children}
        </CountryContext.Provider>
    );
};

// ===================== Custom Hook =====================
export const useCountry = () => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error("useCountry must be used within a CountryProvider");
    }
    return context;
};