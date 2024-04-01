import qs from "qs";
import {HeroSection} from "@/components/custom/HeroSection";
import {IntroSection} from "@/components/custom/IntroSection";
import {StepSection} from "@/components/custom/StepSection";
import {getStrapiURL} from "@/components/custom/StrapiImage";

const homePageQuery = qs.stringify({
    populate: {
        blocks: {
            populate: {
                image: {
                    fields: ["url", "alternativeText"],
                },
                link: {
                    fields: ["url", "text"],
                },
                titel: "",
                beschrijving: "",
                stap: {
                    fields: ["text"]
                }
            },
        },
    },
});

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

async function getStrapiData(path) {
    const baseUrl = "http://localhost:1337";

    const url = new URL(path, baseUrl);
    url.search = homePageQuery;

    try {
        const response = await fetch(url.href, {cache: 'no-store'});
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default async function Home() {
    const strapiData = await getStrapiData("/api/homepagina");

    const {blocks} = strapiData.data.attributes;
    if (!blocks) return <p>No sections found</p>;

    return <main>{blocks.map((block) => blockRenderer(block))}</main>;
}