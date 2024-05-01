import Link from "next/link";
import {Logo} from "@/components/custom/Logo";

export async function Header({data}) {
    const {logoImage, menuLink} = data;
    return (
        <div className="bg-byte-blue py-8 px-16">
            <div className="container flex items-center justify-between">
                <div className="logo">
                    <Logo url={logoImage.url}/>
                </div>
                <div className="navigation">
                    {menuLink.map((menu) => (
                        <Link className="text-white me-16 text-xl" href={menu.url} key={menu.id}>{menu.text}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}