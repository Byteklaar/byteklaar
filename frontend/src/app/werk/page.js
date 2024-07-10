import {getProjectenData} from "@/data/loaders";
import {ProjectenGallerij} from "@/components/custom/Werk/ProjectenGallerij";

export default async function Page() {
    const projectData = await getProjectenData();

    return (
        <ProjectenGallerij data={projectData.data} />
    )
}