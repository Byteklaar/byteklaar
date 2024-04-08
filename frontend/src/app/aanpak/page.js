import {HeroSection} from "@/components/custom/Home/HeroSection";
import {IntroSection} from "@/components/custom/Home/IntroSection";
import {StepSection} from "@/components/custom/Home/StepSection";
import {getAanpakPageData} from "@/data/loaders";

function blockRenderer(block) {
    switch (block.__component) {
        case "layout.hero-section":
            return <HeroSection key={block.id} data={block}/>;
        case "layout.intro-section":
            return <IntroSection key={block.id} data={block}/>;
        case "layout.stappen-section":
            return <StepSection key={block.id} data={block}/>;
        default:
            return null;
    }
}

export default async function Aanpak() {
    const strapiData = await getAanpakPageData();

    const {blocks} = strapiData;
    if (!blocks) return <p>No sections found</p>;

    return <main>{blocks.map((block) => blockRenderer(block))}</main>;
}