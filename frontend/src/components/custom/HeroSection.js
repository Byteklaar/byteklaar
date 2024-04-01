import Link from "next/link";
import {StrapiImage} from "@/components/custom/StrapiImage";
import {CircleButton} from "@/components/ui/CircleButton";

const Image = {
    id: 0,
    url: "",
    alternativeText: ""
}

const LinkButton = {
    id: 0,
    url: "",
    text: ""
}

const HeroSectionProps = {
    id: 0,
    __component: "",
    Image: {},
    Link: {}
};

export function HeroSection({data}) {
    const { image, link } = data;
    return (
        <header className="relative h-[600px] overflow-hidden">
            <StrapiImage
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full"
                height={1080}
                src={image.data.attributes.url}
                width={1920}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
                <CircleButton
                    link={link.url}
                    titel={link.text}
                />
            </div>
        </header>
    );
}