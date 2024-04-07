import {Step} from "@/components/ui/Step";
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

export function StepSection({data}) {
    const {titel, beschrijving, stap, link} = data;
    return (
        <div className="container">
            <div className="px-16 my-16">
                <h3 className="text-7xl w-6/12">{titel}</h3>
                <div className="grid grid-cols-6 items-center content-center text-center mt-16 w-full">
                    {stap.map((stap, index) =>
                        <div key={stap.id}>
                            <Step counter={index} text={stap.text}/>
                        </div>
                    )}
                </div>
                <div className="w-4/12 mr-0 ml-auto mt-16">
                        <p className="mb-6 text-lg">{beschrijving}</p>
                        <LinkButton link={link.url} tekst={link.text} textColor="white" bgColor="byte-blue"/>
                </div>
            </div>
        </div>
    );
}