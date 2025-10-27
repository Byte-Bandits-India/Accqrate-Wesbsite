import HeroResourceSection from "./Hero";
import RecentBlogPosts from "./RecentBlogs";
import ZatcaSection from "@/components/ZatcaSection";
export default function ResourcesPage() {
  return (
    <main>
      <HeroResourceSection />
      <RecentBlogPosts />
      <ZatcaSection/>
    </main>
  );
}
