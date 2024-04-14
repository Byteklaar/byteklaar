import {getProjectenData} from "@/data/loaders";
import {ProjectenGallerij} from "@/components/custom/Werk/ProjectenGallerij";

function blockRenderer(block) {
    switch (block.__component) {
        case "layout.hero-section":
            return <ProjectenGallerij key={block.id} data={block}/>;
        default:
            return null;
    }
}

export default async function Page() {
    const strapiData = await getProjectenData();

    const {blocks} = strapiData;
    if (!blocks) return <p>No sections found</p>;

    return <ProjectenGallerij key={blocks.id} data={blocks}/>;
}