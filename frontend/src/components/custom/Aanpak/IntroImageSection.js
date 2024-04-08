import BlockRendererClient from "@/app/BlockRendererClient";
import {StrapiImage} from "@/components/custom/StrapiImage";

const IntroImageSectionProps = {
    id: 0,
    __component: "",
    titel: "",
    beschrijving: ""
};

export function IntroImageSection({data}) {
    const {afbeelding, beschrijving} = data;
    return (
        <div className="flex row">
            <div className="basis-3/5 px-16 my-16">
                <StrapiImage
                    src={afbeelding.url}
                    width={100}
                    height={100}
                />
            </div>
            <div className="basis-2/5 bg-byte-beige py-20 text-xl px-16">
                <BlockRendererClient content={beschrijving} />
            </div>
        </div>
    );
}