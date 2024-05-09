import Link from "next/link";
import {StrapiImage} from "@/components/custom/StrapiImage";

export function ProjectenGallerij({data}) {
    return (
        <div className="container grid gap-4 grid-rows-2 grid-cols-2 p-8">
            {data.map((project) => (
                <Link key={project.id} href={`/projecten/${project.id}`} className="relative group ease-in-out">
                    <StrapiImage
                        className="object-cover h-full w-full"
                        src={project.uitgelichteAfbeelding.url}
                        width={1000}
                        height={1000}
                        alt="Project afbeelding"
                    />
                    <div
                        className="absolute top-0 left-0 flex flex-col justify-between h-full w-full p-8 bg-byte-terra invisible group-hover:visible ease-in-out">
                        <h1 className="text-white text-3xl w-10/12">{project.titel}</h1>
                        <p className="text-white text-3xl w-10/12">{project.excerpt}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}