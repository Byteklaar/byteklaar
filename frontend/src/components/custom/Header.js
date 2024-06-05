'use client';
import Link from "next/link";
import {Logo} from "@/components/custom/Logo";
import Image from 'next/image';

export function Header({data}) {
    const {logoImage, menuLink} = data;

    const handleClick = () => {
        const menu = document.getElementById('nav');
        const OpenButton = document.getElementById('openMenu');
        if (menu.style.display === "flex") {
            menu.style.display = "none";
            OpenButton.style.display = "block";
        } else {
            menu.style.display = "flex";
            OpenButton.style.display = "none";
        }
    };

    return (
        <div className="bg-byte-blue py-8 px-16">
            <div className="container flex md:flex-row flex-col items-center justify-between">
                <div className="logo">
                    <Logo url={logoImage.url}/>
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="hidden md:block">
                        {menuLink.map((menu) => (
                            <Link className="text-white me-16 text-xl" href={menu.url} key={menu.id}>{menu.text}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:hidden flex justify-center">
                <button id="openMenu" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="white" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
                <div id="nav"
                     className="hidden absolute z-50 top-0 left-0 py-16 h-screen bg-byte-blue w-screen flex-col justify-top items-center">
                    <Image
                        src="/icons/questionmark.jpg"
                        width={500}
                        height={500}
                        alt="Byteklaar vraagteken"
                    />
                    <button id="closeMenu" className="mb-8" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    {menuLink.map((menu) => (
                        <Link className="text-white mb-4 text-xl" href={menu.url}
                              key={menu.id}>{menu.text}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}