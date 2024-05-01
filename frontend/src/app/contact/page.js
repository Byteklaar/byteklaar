import {getContactData} from "@/data/loaders";
import BlockRendererClient from "@/app/BlockRendererClient";
import Link from "next/link";
import Image from "next/image";

function getIcon(name) {
    switch (name) {
        case "LinkedIn":
            return <LinkedInIcon className="w-12 h-12 mb-4 text-gray-900"/>;
        case "Instagram":
            return <InstagramIcon className="w-12 h-12 mb-4 text-gray-900"/>;
        case "Facebook":
            return <FacebookIcon className="w-12 h-12 mb-4 text-gray-900"/>;
        default:
            return null;
    }
}

export default async function Page() {
    const contactData = await getContactData();
    const {titel, adresStraat, adresPostcode, mail, telefoon, openingsuren, socialLinks} = contactData;
    return (
        <div className="bg-byte-blue p-16">
            <div className="container">
                <div className="text-6xl text-white mb-16">
                    <BlockRendererClient content={titel}/>
                </div>
                <Link className="text-white block" href={mail.url}>{mail.text}</Link>
                <Link className="text-white block mb-4" href={telefoon.url}>{telefoon.text}</Link>
                <Link className="text-white block mb-4" href="https://maps.app.goo.gl/eFsqRswPtnVLqjWA9"
                      target="_blank">{adresStraat} <br/>{adresPostcode}</Link>
                <p className="text-white block mb-16">{openingsuren}</p>
                <div className="flex">
                    {socialLinks.map((socialLink) => (
                        <Link target="_blank" className="text-black me-2" href={socialLink.url}
                              key={socialLink.id}>{getIcon(socialLink.text)}</Link>
                    ))}
                </div>
                <div className="block mt-64">
                    <h1></h1>
                    <form action="" className="grid grid-cols-2">
                        <input id="naam" placeholder="Naam" className="me-12 border-2 placeholder:text-white text-white p-2 px-6 border-white rounded-full bg-transparent" type="tel"/>
                        <input id="naam" placeholder="Naam" className="border-2 placeholder:text-white text-white p-2 px-6 border-white rounded-full bg-transparent" type="text"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

function FacebookIcon() {
    return (
        <Image width={32} height={32} alt="Byteklaar Facebook" src="/icons/icon_facebook.svg"/>
    );
}

function InstagramIcon() {
    return (
        <Image width={32} height={32} alt="Byteklaar Instagram" src="/icons/icon_instagram.svg"/>
    );
}

function LinkedInIcon() {
    return (
        <Image width={32} height={32} alt="Byteklaar LinkedIn" src="/icons/icon_linkedin.svg"/>
    );
}