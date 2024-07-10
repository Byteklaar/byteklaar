import BlockRendererClient from "@/app/BlockRendererClient";

export function IntroSection({data}) {
    const {titel, beschrijving} = data;
    return (
        <div className="flex flex-col md:flex-row">
            <div className="basis-full xl:basis-3/5 py-8 md:py-32 px-8 md:px-16">
                <h2 className="text-5xl xl:text-8xl lg:text-6xl w-full md:w-10/12">{titel}</h2>
            </div>
            <div className="basis-full xl:basis-2/5 bg-byte-beige py-8 text-lg md:text-xl px-8 md:py-32 md:px-16">
                <BlockRendererClient content={beschrijving} />
            </div>
        </div>
    );
}