import Hero from "./sections/hero";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";
export default function CRMPage() {
    return (
        <div>
            <div className="overflow-x-hidden">
                <Hero />
                <Section1 />
                <Section2 />
            </div>
            <Section3 />
            <div className="overflow-x-hidden">
                <Section4 />
                <Section5 />
            </div>
        </div>
    );
}
