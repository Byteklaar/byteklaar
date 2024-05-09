import BlockRendererClient from "@/app/BlockRendererClient";

const IntroSectionProps = {
    id: 0,
    __component: "",
    titel: "",
    beschrijving: ""
};

export function IntroSection({data}) {
    const {titel, beschrijving} = data;
    return (
        <div className="flex row">
            <div className="basis-3/5 px-16 my-16">
                <h1 className="text-8xl w-10/12">{titel}</h1>
            </div>
            <div className="basis-2/5 bg-byte-beige py-20 text-xl px-16">
                <BlockRendererClient content={beschrijving} />
            </div>
        </div>
    );
}