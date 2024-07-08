import {getContactData} from "@/data/loaders";
import Link from "next/link";
import Image from "next/image";
import {ContactForm} from "@/components/custom/Contact/ContactForm";

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

export default async function Contact() {
    const contactData = await getContactData();
    const {titel, adresStraat, adresPostcode, mail, telefoon, openingsuren, socialLinks, formulier} = contactData;
    // TODO create SMTP connection
    return (
        <div className="bg-byte-blue p-8 lg:p-16">
            <div className="container">
                <div className="text-6xl text-white mb-16">
                    <h1 className="text-6xl w-full md:w-5/12">{titel}</h1>
                </div>
                <div className="inline-flex flex-col">
                    <Link className="text-white" href={mail.url}>{mail.text}</Link>
                    <Link className="text-white mb-4" href={telefoon.url}>{telefoon.text}</Link>
                    <Link className="text-white mb-4" href="https://maps.app.goo.gl/eFsqRswPtnVLqjWA9"
                          target="_blank">{adresStraat} <br/>{adresPostcode}</Link>
                    <p className="text-white block mb-16">{openingsuren}</p>
                </div>
                <div className="flex">
                    {socialLinks.map((socialLink) => (
                        <Link target="_blank" className="text-black me-2" href={socialLink.url}
                              key={socialLink.id}>{getIcon(socialLink.text)}</Link>
                    ))}
                </div>
                <div className="block mt-64">
                    <h2 className="text-5xl text-white mb-16">{formulier.titel}</h2>
                    <ContactForm data={formulier}/>
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