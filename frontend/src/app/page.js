import {HeroSection} from "@/components/custom/Home/HeroSection";
import {IntroSection} from "@/components/custom/Home/IntroSection";
import {StepSection} from "@/components/custom/Home/StepSection";
import {HomeIntro} from "@/components/custom/Home/HomeIntro";
import {getHomePageData} from "@/data/loaders";
// import {HeadSeo} from "@/components/custom/HeadSeo";

function blockRenderer(block) {
    switch (block.__component) {
        case "layout.home-intro":
            return <HomeIntro key={block.id} data={block}/>;
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

export default async function Page() {
    const strapiData = await getHomePageData();

    const {blocks} = strapiData;
    if (!blocks) return <p>No sections found</p>;

    return (
        <>
            {/*<HeadSeo titel={strapiData.titel} beschrijving={strapiData.beschrijving}/>*/}
            <main>{blocks.map((block) => blockRenderer(block))}</main>
        </>
    );

}