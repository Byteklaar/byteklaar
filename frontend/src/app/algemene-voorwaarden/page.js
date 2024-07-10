import {getVoorwaardenData} from "@/data/loaders";
import Link from "next/link";
import BlockRendererClient from "@/app/BlockRendererClient";
import {LinkButton} from "@/components/ui/LinkButton";


export default async function AlgemeneVoorwaarden() {
    const voorwaardenData = await getVoorwaardenData();
    const {titel} = voorwaardenData;
    return (
        <div className="p-8 lg:p-16">
            <div className="container">
                <div>
                    <div className="flex space-between items-center">
                        <h1 className="text-6xl w-full md:w-5/12">{titel}</h1>
                        {/*<LinkButton link={algemeneVoorwaarden.download.url} tekst={algemeneVoorwaarden.download.text} textColor="byte-blue" bgColor="white"/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}