import {IntroSection} from "@/components/custom/Aanpak/IntroSection";
import {StepSection} from "@/components/custom/Aanpak/StepSection";
import {StepSectionAnimation} from "@/components/custom/Aanpak/StepSectionAnimation";
import {getAanpakPageData} from "@/data/loaders";
import {IntroImageSection} from "@/components/custom/Aanpak/IntroImageSection";

function blockRenderer(block) {
    switch (block.__component) {
        case "layout.intro-section":
            return <IntroSection key={block.id} data={block}/>;
        case "layout.intro-image-section":
            return <IntroImageSection key={block.id} data={block}/>;
        case "layout.stappen-section":
            // return <StepSection key={block.id} data={block}/>;
            return <StepSectionAnimation key={block.id} data={block}/>;
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