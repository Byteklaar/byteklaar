import {BigStep} from "@/components/ui/BigStep";
import {LinkButton} from "@/components/ui/LinkButton";
import Link from "next/link";

const Stap = {
    id: 0,
    stap_title: ""
}

const StepSectionProps = {
    id: 0,
    __component: "",
    titel: "",
    beschrijving: "",
    Stap: {},
    Link: {}
};

function showLink(link) {
    if (link) {
        return (
            <LinkButton link={link.url} tekst={link.text} textColor="white" bgColor="byte-blue"/>
        )
    }
    return null;
}

export function StepSection({data}) {
    const {titel, beschrijving, stap, link} = data;
    // TODO stap scroll animatie
    return (
        <div className="container">
            <div className="px-16 my-16">
                <h3 className="text-7xl w-6/12">{titel}</h3>
                <div className="flex flex-col items-center content-center text-center mt-16 w-full">
                    {stap.map((stap, index) =>
                        <div key={stap.id}>
                            <BigStep counter={index} titel={stap.text} beschrijving={stap.beschrijving} afbeelding={stap.afbeelding}/>
                        </div>
                    )}
                </div>
                <div className="w-4/12 mr-0 ml-auto mt-16">
                    <p className="mb-6 text-lg">{beschrijving}</p>
                    {showLink(link)}
                </div>
            </div>
        </div>
    )
        ;
}