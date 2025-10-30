// components/T.tsx - Improved version
'use client';

import { useCountry } from "@/contexts/CountryContext";
import { t, currentLang } from "@/lib/translations";
import { useState, useEffect, ReactNode } from 'react';

interface TProps {
    children: ReactNode; // Changed from string to ReactNode
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

    // If children is a string, translate it
    if (typeof children === 'string') {
        const translatedText = t(children);
        return <>{translatedText}</>;
    }

    // If children contains JSX elements, we need to handle translation differently
    // This is a simplified approach - you might need a more sophisticated solution
    // for nested translations
    return <>{children}</>;
}