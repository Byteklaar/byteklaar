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
    return (
        <div className="flex bg-byte-blue">
            <div className="h-4/6 flex-1">
                <StrapiImage className="w-full h-full object-cover"
                             src={image.url}
                             width={100}
                             height={100}
                             alt="Vraagteken"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center p-16">
                <h2 className="text-white text-6xl w-5/6 mb-6">{titel}</h2>
                <div>
                    <LinkButton link={link.url} tekst={link.text} textColor="byte-blue" bgColor="white"/>
                </div>
            </div>
        </div>
    );
}