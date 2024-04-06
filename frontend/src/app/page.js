import {HeroSection} from "@/components/custom/HeroSection";
import {IntroSection} from "@/components/custom/IntroSection";
import {StepSection} from "@/components/custom/StepSection";
import {getHomePageData} from "@/data/loaders";

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

export default async function Home() {
    const strapiData = await getHomePageData();

    const {blocks} = strapiData;
    if (!blocks) return <p>No sections found</p>;

    return <main>{blocks.map((block) => blockRenderer(block))}</main>;
}