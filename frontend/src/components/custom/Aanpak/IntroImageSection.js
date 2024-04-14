import BlockRendererClient from "@/app/BlockRendererClient";
import {StrapiImage} from "@/components/custom/StrapiImage";

const IntroImageSectionProps = {
    id: 0,
    __component: "",
    titel: "",
    beschrijving: ""
};

export function IntroImageSection({data}) {
    const {afbeelding, tekst} = data;
    return (
        <div className="flex row">
            <div className="basis-3/5">
                <StrapiImage
                    src={afbeelding.url}
                    width={1000}
                    height={1000}
                />
            </div>
            <div className="basis-2/5 py-20 text-xl px-16">
                <p>{tekst}</p>
            </div>
        </div>
    );
}