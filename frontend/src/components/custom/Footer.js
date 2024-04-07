import Link from "next/link";
import {StrapiImage} from "@/components/custom/StrapiImage";
import {LinkButton} from "@/components/ui/LinkButton";

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
        vraagteken: {},
        link: {},
        titel: "",
    }
}

export async function Footer({data}) {
    const {menuLink, adres, mail, telefoon, algemeneVoorwaarden, privacyBeleid, socialLink} = data;
    return (
        <div className="">
            <div className="flex">
                <div>
                </div>
                <div>
                    <h2></h2>
                </div>
            </div>
            <div className="p-4 bg-byte-beige flex items-center justify-between">
                <div className="container flex justify-between">
                    <div className="">
                        {menuLink.map((menu) => (
                            <Link className="text-black me-8 text-md" href={menu.url} key={menu.id}>{menu.text}</Link>
                        ))}
                    </div>
                    <div className="flex">
                        <div className="grid grid-cols-2 grid-rows-2 gap-12">
                            <div>
                                <Link href={mail.url}>{mail.text}</Link>
                                <Link href={telefoon.url}>{telefoon.text}</Link>
                            </div>
                            <div>
                                <Link className="block w-8/12" target={adres.isExternal ? '' : '_blank'}
                                      href={adres.url}>{adres.text}</Link>
                            </div>
                            <div>
                                <Link href={algemeneVoorwaarden.url}>{algemeneVoorwaarden.text}</Link>
                            </div>
                            <div>
                                <Link href={privacyBeleid.url}>{privacyBeleid.text}</Link>
                            </div>
                        </div>
                        <div>
                            {socialLink.map((menu) => (
                                <Link className="text-black me-8 text-md" href={menu.url}
                                      key={menu.id}>{menu.text}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}