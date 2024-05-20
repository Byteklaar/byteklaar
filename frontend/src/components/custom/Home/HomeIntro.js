import {StrapiImage} from "@/components/custom/StrapiImage";

export function HomeIntro({data}) {
    const {LogoAnimation} = data;
    return (
        <header className="relative h-[1250px] overflow-hidden">
            <StrapiImage
                alt=""
                className="absolute inset-0 object-cover w-full h-full"
                height={1250}
                src={LogoAnimation.url}
                width={2560}
            />
        </header>
    );
}