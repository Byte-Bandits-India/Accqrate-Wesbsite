import { redirect } from "next/navigation";

interface LangPageProps {
    params: Promise<{
        lang: string;
    }>;
}

export default async function LangHomePage({ params }: LangPageProps) {
    const { lang } = await params;

    // Redirect to default country for this language
    redirect(`/${lang}/sa`);
}