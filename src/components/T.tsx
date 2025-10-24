// components/T.tsx - Improved version
'use client';

import { useCountry } from "@/contexts/CountryContext";
import { t, currentLang } from "@/lib/translations";
import { useState, useEffect } from 'react';

interface TProps {
    children: string;
}

export default function T({ children }: TProps) {
    const { selectedLanguage, isInitialized } = useCountry();
    const [forceUpdate, setForceUpdate] = useState(0);

    // Listen for language changes
    useEffect(() => {
        const handleLanguageChange = () => {
            setForceUpdate(prev => prev + 1);
        };

        window.addEventListener('languageChanged', handleLanguageChange);
        window.addEventListener('storage', handleLanguageChange);

        return () => {
            window.removeEventListener('languageChanged', handleLanguageChange);
            window.removeEventListener('storage', handleLanguageChange);
        };
    }, []);

    // Show loading state if not initialized
    if (!isInitialized) {
        return <>{children}</>;
    }

    const translatedText = t(children);

    return <>{translatedText}</>;
}