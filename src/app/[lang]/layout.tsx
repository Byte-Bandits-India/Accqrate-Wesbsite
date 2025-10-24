import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

interface LangLayoutProps {
    children: ReactNode;
    params: Promise<{
        lang: string;
    }>;
}

const supportedLanguages = ['en', 'ar'];

export default async function LangLayout({ children, params }: LangLayoutProps) {
    const { lang } = await params;

    // Validate language
    if (!supportedLanguages.includes(lang)) {
        notFound();
    }

    return (
        <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            {children}
        </div>
    );
}

export async function generateStaticParams() {
    return supportedLanguages.map((lang) => ({
        lang,
    }));
}