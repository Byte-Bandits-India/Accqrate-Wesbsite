// app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect to default language and country
  redirect('/en/sa');
}