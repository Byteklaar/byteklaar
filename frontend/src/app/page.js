import qs from "qs";
import { HeroSection } from "@/components/custom/HeroSection";

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
            },
        },
    },
});

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
    const { titel, titel_beschrijving, blocks } = strapiData.data.attributes;

    return (
        <main className="container mx-auto py-6">
            <h1 className="text-5xl font-bold">{titel}</h1>
            <p className="text-xl mt-4">{titel_beschrijving}</p>
            <HeroSection data={blocks[0]} />
        </main>
    );
}