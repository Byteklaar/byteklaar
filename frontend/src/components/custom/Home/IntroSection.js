import BlockRendererClient from "@/app/BlockRendererClient";

export function IntroSection({data}) {
    const {titel, beschrijving} = data;
    return (
        <div className="flex flex-col md:flex-row">
            <div className="basis-full xl:basis-3/5 px-8 my-8 md:px-16 md:my-16">
                <h1 className="text-5xl xl:text-8xl lg:text-6xl w-full md:w-10/12">{titel}</h1>
            </div>
            <div className="basis-full xl:basis-2/5 bg-byte-beige py-8 text-lg md:text-xl px-8 md:py-20 md:px-16">
                <BlockRendererClient content={beschrijving} />
            </div>
        </div>
    );
}