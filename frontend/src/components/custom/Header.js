import Link from "next/link";
import {Logo} from "@/components/custom/Logo";

const HeaderProps = {
    data: {
        logoImage: {
            id: 0,
            Image: {},
        },
        menuLink: {
            id: 0,
            text: "",
            url: "",
        }
    }
}

export async function Header({data}) {
    const {logoImage, menuLink} = data;
    return (
        <div className="py-4 bg-byte-blue flex items-center justify-between">
            <div className="logo">
                <Logo url={logoImage.url}/>
            </div>
            <div className="navigation">
                {menuLink.map((menu) => (
                    <Link className="text-white me-16 text-xl" href={menu.url} key={menu.id}>{menu.text}</Link>
                ))}
            </div>
        </div>
    );
}