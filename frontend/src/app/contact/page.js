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
    const {titel, adresStraat, adresPostcode, mail, telefoon, openingsuren, socialLinks, formulier} = contactData;
    return (
        <div className="bg-byte-blue p-16">
            <div className="container">
                <div className="text-6xl text-white mb-16">
                    <h1 className="text-6xl w-5/12">{titel}</h1>
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
                    <h2 className="text-5xl text-white mb-16">{formulier.titel}</h2>
                    <form action="" className="grid grid-flow-row grid-cols-2 gap-x-8 gap-y-3">
                        {formulier.field.map((field) => (
                            field.type === "textarea" ? (
                                <textarea
                                    className="border-2 col-start-2 row-start-2 row-span-3 placeholder:text-white text-white py-2 px-6 border-white rounded-3xl bg-transparent"
                                    key={field.id}
                                    placeholder={field.naam}
                                    rows={5}
                                    required={field.verplicht}
                                />
                            ) : (
                                <input
                                    className="border-2 col-start-1 col-end-1 placeholder:text-white text-white py-2 px-6 border-white rounded-full bg-transparent"
                                    key={field.id}
                                    type={field.type}
                                    placeholder={field.naam}
                                    required={field.verplicht}
                                />
                            )
                        ))}
                        <select
                            className="col-start-2 col-end-2 row-start-1 border-2 appearance-none outline-none placeholder:text-white text-white py-2 px-6 border-white rounded-3xl bg-transparent"
                            name="Fase" id="Fase" required={formulier.dropdownVerplicht}>
                            <option selected>{formulier.dropdownDefault}</option>
                            {formulier.dropdown.map((field) => (
                                <option key={field.id} value={field.titel}>{field.titel}</option>
                            ))}
                        </select>
                        <input
                            className="col-start-2 col-end-2 hover:bg-white hover:text-byte-blue cursor-pointer ease-in-out duration-150 p-2 border-2 border-white text-white rounded-full block"
                            type="submit"
                            value="Versturen"/>
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