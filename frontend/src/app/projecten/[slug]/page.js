import {getProjectSingleData} from "@/data/loaders";
import {StrapiImage} from "@/components/custom/StrapiImage";
import Link from "next/link";

export default async function Page({params}) {
    const slug = params.slug;
    const projectData = await getProjectSingleData(slug);
    console.data(projectData);
    return (
        <div id="top" className="container p-8">
            <div className="block lg:flex justify-between content-start">
                <h1 className="text-4xl mb-4 w-full lg: mb-0lg:text-6xl lg:w-10/12">{projectData.titel}</h1>
                <p className="w-full lg:w-6/12">{projectData.beschrijving}</p>
            </div>
            <div className="project-gallerij mt-8 lg:mt-16 flex flex-col items-center">
                {projectData.gallerij.data.map((afbeelding) => (
                    <div key={afbeelding.id}
                         className="relative block achtergrond w-full flex flex-col items-center mb-16"
                    >
                        <StrapiImage
                            className="my-16 w-8/12 z-50"
                            src={afbeelding.url}
                            width={1000}
                            height={1000}
                            alt={afbeelding.alternativeText}
                        />
                    </div>
                ))}
                <div className="flex justify-start lg:justify-end w-full mb-6 lg:mb-8">
                    <p className="w-full lg:w-4/12">{projectData.extra_beschrijving}</p>
                </div>
                <div className="flex justify-start lg:justify-end w-full my-0 lg:my-12">
                    <Link className="w-full lg:w-4/12 text-4xl" href="#top">Terug naar boven</Link>
                </div>
            </div>
        </div>
    );
}