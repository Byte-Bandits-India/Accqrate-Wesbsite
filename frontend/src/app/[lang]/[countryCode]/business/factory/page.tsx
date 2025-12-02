import Hero from "./sections/hero";
import Section1 from "./sections/section1"
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";

export default function OnePage() {
    return (
        <div>
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    );
}
