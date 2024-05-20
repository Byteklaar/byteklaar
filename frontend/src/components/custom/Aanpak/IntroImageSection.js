import {StrapiImage} from "@/components/custom/StrapiImage";

export function IntroImageSection({data}) {
    const {afbeelding, tekst} = data;
    return (
        <div className="block lg:flex lg:row">
            <StrapiImage
                className="object-cover basis-full lg:basis-3/5"
                src={afbeelding.url}
                width={1000}
                height={1000}
            />
            <div className="basis-full lg:basis-2/5 py-8 lg:py-16 text-lg lg:text-xl px-8 lg:px-16">
                <p>{tekst}</p>
            </div>
        </div>
    );
}