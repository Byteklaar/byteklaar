import Link from "next/link";
import Image from "next/image";

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

export async function Footer({data}) {
    const {menuLink, adres, mail, telefoon, algemeneVoorwaarden, privacyBeleid, socialLink} = data;
    // TODO nieuwsbrief sign up
    return (
        <div>
            <div className="pt-8 py-4 px-8 lg:py-8 lg:px-16 bg-byte-beige flex items-center justify-between">
                <div className="container block md:flex md:justify-between">
                    <div className="block md:flex md:flex-col lg:block mb-4 md:mb-0">
                        {menuLink.map((menu) => (
                            <Link className="text-black me-2 mb:me-0 mb-2 lg:mb-0 lg:me-8 text-md" href={menu.url} key={menu.id}>{menu.text}</Link>
                        ))}
                    </div>
                    <div className="block md:flex">
                        <div className="block lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-16">
                            <div>
                                <Link className="mb-2 lg:mb-0 block leading-5" href={mail.url}>{mail.text}</Link>
                                <Link className="block mb-2 lg:mb-0" href={telefoon.url}>{telefoon.text}</Link>
                            </div>
                            <div>
                                <Link className="block mb-2 lg:mb-0 w-8/12 leading-5" target={adres.isExternal ? '' : '_blank'}
                                      href={adres.url}>{adres.text}</Link>
                            </div>
                            <div>
                                <Link className="text-xs mb-2 lg:mb-0" href={algemeneVoorwaarden.url}>{algemeneVoorwaarden.text}</Link>
                            </div>
                            <div>
                                <Link className="text-xs mb-2 lg:mb-0" href={privacyBeleid.url}>{privacyBeleid.text}</Link>
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col lg:flex-row mt-4 ms-0 md:ms-16">
                            {socialLink.map((menu) => (
                                <Link target="_blank" className="text-black me-2 mb-2 lg:mb-0" href={menu.url}
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