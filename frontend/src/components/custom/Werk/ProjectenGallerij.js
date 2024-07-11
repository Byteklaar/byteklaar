import Link from "next/link";
import {StrapiImage} from "@/components/custom/StrapiImage";
import {LinkButton} from "@/components/ui/LinkButton";

export function ProjectenGallerij({data}) {
    return (
        <div className="container grid gap-4 grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 p-8">
            {data.map((project) => (
                <Link key={project.id} href={`/projecten/${project.id}`}
                      className="relative flex flex-col group ease-in-out">
                    <div>
                        <StrapiImage
                            className="object-cover h-full w-full"
                            src={project.uitgelichteAfbeelding.url}
                            width={1000}
                            height={1000}
                            alt="Project afbeelding"
                        />
                    </div>
                    <div
                        className="hidden md:flex absolute top-0 left-0 flex-col justify-between h-full w-full p-8 bg-byte-terra md:invisible md:group-hover:visible md:ease-in-out">
                        <h1 className="text-white text-xl md:text-3xl w-10/12">{project.titel}</h1>
                        <p className="text-white text-md md:text-3xl w-10/12">{project.excerpt}</p>
                    </div>
                    <div
                        className="flex md:hidden flex-col justify-between h-full w-full mt-4 md:invisible md:group-hover:visible md:ease-in-out">
                        <h1 className="text-xl md:text-3xl w-10/12">{project.titel}</h1>
                        <p className="text-md md:text-3xl w-10/12">{project.excerpt}</p>
                        <div className="mt-6">
                            <LinkButton link={`/projecten/${project.id}`} tekst="Lees meer" textColor="white"
                                        bgColor="byte-blue"/>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}