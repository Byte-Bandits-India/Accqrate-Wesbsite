'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { setLanguage, currentLang } from "@/lib/translations";

interface Country {
    name: string;
    code: string;
    flag: string;
    language: string;
    currency: string;
}

interface Language {
    code: string;
    name: string;
    display: string;
}

interface CountryContextType {
    selectedCountry: Country;
    setSelectedCountry: (country: Country) => void;
    selectedLanguage: Language;
    setSelectedLanguage: (language: Language) => void;
    countries: Country[];
    languages: Language[];
    isInitialized: boolean;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

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
        flag: "/images/header/language/flag-Mauritius.svg",
        language: "English",
        currency: "MUR",
    },
    {
        name: "Belgium",
        code: "BE",
        flag: "/images/header/language/Belgium.webp",
        language: "English",
        currency: "MUR",
    },
    {
        name: "Poland",
        code: "PL",
        flag: "/images/header/language/poland.svg",
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
    { code: "en", name: "English", display: "Eng" },
];

// ===================== Context Type =====================
export function CountryProvider({ children }: { children: ReactNode }) {
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize from URL - this runs only on client side
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;

        const initializeFromURL = () => {
            const pathSegments = window.location.pathname.split('/').filter(segment => segment);

            // Set language from URL
            if (pathSegments.length >= 1) {
                const urlLang = pathSegments[0];
                const foundLang = languages.find(l => l.code === urlLang);
                if (foundLang) {
                    setSelectedLanguage(foundLang);
                    // Update translation system immediately
                    setLanguage(foundLang.code as 'en' | 'ar');
                    console.log('🌍 CountryContext: Initialized language to', foundLang.code);
                }
            }

            // Set country from URL
            if (pathSegments.length >= 2) {
                const urlCountry = pathSegments[1].toUpperCase();
                const foundCountry = countries.find(c => c.code === urlCountry);
                if (foundCountry) {
                    setSelectedCountry(foundCountry);
                }
            }
        };

        initializeFromURL();
        setIsInitialized(true);
    }, []);

    // Update translation system whenever selectedLanguage changes
    useEffect(() => {
        if (isInitialized && (selectedLanguage.code === 'en' || selectedLanguage.code === 'ar')) {
            console.log('🔄 CountryContext: Updating language to', selectedLanguage.code);
            setLanguage(selectedLanguage.code as 'en' | 'ar');

            // Force a re-render of translation components
            // This ensures T components update with new translations
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: selectedLanguage.code }
            }));
        }
    }, [selectedLanguage.code, isInitialized]);

    return (
        <CountryContext.Provider
            value={{
                selectedCountry,
                setSelectedCountry,
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
}
export function useCountry() {
    const context = useContext(CountryContext);
    if (context === undefined) {
        throw new Error('useCountry must be used within a CountryProvider');
    }
    return context;
}