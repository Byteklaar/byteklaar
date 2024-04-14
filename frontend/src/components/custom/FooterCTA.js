import Image from "next/image";
import {StrapiImage} from "@/components/custom/StrapiImage";
import {LinkButton} from "@/components/ui/LinkButton";

const FooterCtaProps = {
    data: {
        footerCta: {
            link: {},
            image: {},
            titel: "",
        }
    }
}

export async function FooterCTA({data}) {
    const {image, titel, link} = data;
    // TODO animatie 3d object
    return (
        <div className="flex bg-byte-blue z-10">
            <div className="flex-1 bg-byte-terra z-0 px-16 py-4">
                <StrapiImage className="relative object-cover h-full w-full ease-in-out duration-300 hover:rotate-180 z-0"
                             src={image.url}
                             width={100}
                             height={100}
                             alt="Vraagteken"
                />
            </div>
            <div className="flex-2 flex flex-col justify-center p-16 py-32 z-50 relative">
                <h2 className="text-white text-6xl w-5/6 mb-12 z-10">{titel}</h2>
                <div>
                    <LinkButton link={link.url} tekst={link.text} textColor="byte-blue" bgColor="white"/>
                </div>
            </div>
        </div>
    );
}