import BlockRendererClient from "@/app/BlockRendererClient";
import {StrapiImage} from "@/components/custom/StrapiImage";
import Image from "next/image";

export function BigStep({titel, counter, beschrijving, afbeelding}) {
    return (
        <div className="">
            <StrapiImage
                className="w-64 absolute top-0 right-0"
                src={afbeelding.url}
                height={1000}
                width={1000}
            />
            <div className="flex w-full row items-center my-12 relative">
                <Image
                    className="w-32 absolute z-10"
                    style={{'top': '-40%', 'left': '-5%'}}
                    src="/icons/step_circle.png"
                    height={1000}
                    width={1000}
                    alt="Step circle icon"
                />
                <div className="me-32 z-20 bg-white border border-black px-8 py-6 rounded-full">
                    <p className="text-3xl">{counter + 1}</p>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-5xl mb-8">{titel}</h3>
                    <div className="w-6/12 text-left">
                        <BlockRendererClient content={beschrijving}/>
                    </div>
                </div>
            </div>
        </div>
    );
}