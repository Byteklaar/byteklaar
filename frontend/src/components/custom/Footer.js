import Link from "next/link";
import Image from "next/image";
import {StrapiImage} from "@/components/custom/StrapiImage";
import {LinkButton} from "@/components/ui/LinkButton";

function getIcon(name) {
    switch (name) {
        case "LinkedIn":
            return <LinkedInIcon className="w-12 h-12 mb-4 text-gray-900" />;
        case "Instagram":
            return <InstagramIcon className="w-12 h-12 mb-4 text-gray-900" />;
        case "Facebook":
            return <FacebookIcon className="w-12 h-12 mb-4 text-gray-900" />;
        default:
            return null;
    }
}

const FooterProps = {
    data: {
        privacyBeleid: {
            id: 0,
            url: "",
            text: "",
            isExternal: false,
        },
        algemeneVoorwaarden: {
            id: 0,
            url: "",
            text: "",
            isExternal: false,
        },
        adres: {
            id: 0,
            url: "",
            text: "",
            isExternal: false,
        },
        telefoon: {
            id: 0,
            url: "",
            text: "",
            isExternal: false,
        },
        mail: {
            id: 0,
            url: "",
            text: "",
            isExternal: false,
        },
        socialLink: {
            id: 0,
            url: "",
            text: "",
            isExternal: false,
        },
        menuLink: {
            id: 0,
            text: "",
            url: "",
        },
    }
}

export async function Footer({data}) {
    const {menuLink, adres, mail, telefoon, algemeneVoorwaarden, privacyBeleid, socialLink} = data;
    return (
        <div>
            <div className="py-8 px-16 bg-byte-beige flex items-center justify-between">
                <div className="container flex justify-between">
                    <div>
                        {menuLink.map((menu) => (
                            <Link className="text-black me-8 text-md" href={menu.url} key={menu.id}>{menu.text}</Link>
                        ))}
                    </div>
                    <div className="flex">
                        <div className="grid grid-cols-2 grid-rows-2 gap-16">
                            <div>
                                <Link className="block leading-5" href={mail.url}>{mail.text}</Link>
                                <Link className="block" href={telefoon.url}>{telefoon.text}</Link>
                            </div>
                            <div>
                                <Link className="block w-8/12 leading-5" target={adres.isExternal ? '' : '_blank'}
                                      href={adres.url}>{adres.text}</Link>
                            </div>
                            <div>
                                <Link className="text-xs" href={algemeneVoorwaarden.url}>{algemeneVoorwaarden.text}</Link>
                            </div>
                            <div>
                                <Link className="text-xs" href={privacyBeleid.url}>{privacyBeleid.text}</Link>
                            </div>
                        </div>
                        <div className="flex ms-16">
                            {socialLink.map((menu) => (
                                <Link target="_blank" className="text-black me-2" href={menu.url}
                                      key={menu.id}>{getIcon(menu.text)}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FacebookIcon() {
    return (
        <Image width={32} height={32} alt="Byteklaar Facebook" src="/icons/facebook.svg"/>
    );
}

function InstagramIcon() {
    return (
        <Image width={32} height={32} alt="Byteklaar Instagram" src="/icons/instagram.svg"/>
    );
}

function LinkedInIcon() {
    return (
        <Image width={32} height={32} alt="Byteklaar LinkedIn" src="/icons/linkedin.svg"/>
    );
}