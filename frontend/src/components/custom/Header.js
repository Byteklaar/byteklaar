import Link from "next/link";
import {Logo} from "@/components/custom/Logo";

export async function Header({data}) {
    const {logoImage, menuLink} = data;
    return (
        <div className="bg-byte-blue py-8 px-16">
            <div className="container flex md:flex-row flex-col items-center justify-between">
                <div className="logo">
                    <Logo url={logoImage.url}/>
                </div>
                <div className="mt-8">
                    <div className="hidden md:block">
                        {menuLink.map((menu) => (
                            <Link className="text-white me-16 text-xl" href={menu.url} key={menu.id}>{menu.text}</Link>
                        ))}
                    </div>
                    <div className="md:hidden flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                        <div className="h-screen bg-byte-blue w-screen flex flex-col justify-top items-center">
                            {menuLink.map((menu) => (
                                <Link className="text-white me-16 text-xl" href={menu.url} key={menu.id}>{menu.text}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}