import Image from "next/image";
import {StrapiImage} from "@/components/custom/StrapiImage";
import {LinkButton} from "@/components/ui/LinkButton";

export async function FooterCTA({data}) {
    const {image, titel, link} = data;
    return (
        <div className="flex flex-col lg:flex-row bg-byte-blue z-10">
            <div className="basis-full flex justify-center lg:basis-2/5 bg-byte-terra z-0 px-12 py-8 lg:py-4 max-w-full lg:max-w-xl">
                <StrapiImage className="relative object-cover w-32 lg:h-full lg:w-full ease-in-out duration-300 hover:rotate-180 z-0"
                             src={image.url}
                             width={600}
                             height={600}
                             alt="Vraagteken"
                />
            </div>
            <div className="basis-full lg:basis-3/5 flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-32 z-20 relative">
                <h2 className="text-white text-4xl lg:text-6xl w-full lg:w-5/6 mb-12 z-10">{titel}</h2>
                <div>
                    <LinkButton link={link.url} tekst={link.text} textColor="byte-blue" bgColor="white"/>
                </div>
            </div>
        </div>
    );
}