import {StepBorder} from "@/components/ui/StepBorder";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/app/BlockRendererClient";
import {StrapiImage} from "@/components/custom/StrapiImage";

export function BigStep({titel, counter, beschrijving, afbeelding}) {
    return (
        <div className="flex w-full row items-center">
            <div>
                <StrapiImage
                    src={afbeelding.url}
                    height={1000}
                    width={1000}
                    />
                <p>{titel}</p>
                <BlockRendererClient content={beschrijving} />
            </div>
        </div>
    );
}