"use client";
import {StrapiImage} from "@/components/custom/StrapiImage";
import {CircleButton} from "@/components/ui/CircleButton"
import {gsap} from "gsap";
import {useGSAP} from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
}

export function HeroSection({data}) {
    const {image, link} = data;

    useGSAP(() => {
        gsap.set(".follower", {xPercent: -70, yPercent: -100});

        let xTo = gsap.quickTo(".follower", "x", {duration: 0.6, ease: "power3"}),
            yTo = gsap.quickTo(".follower", "y", {duration: 0.6, ease: "power3"});

        window.addEventListener("mousemove", e => {
            xTo(e.clientX);
            yTo(e.clientY);
        });
    });


    return (
        <header className="relative h-[800px] overflow-hidden">
            <StrapiImage
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full"
                height={1080}
                src={image.url}
                width={2560}
            />
            <div
                className="box relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
                <CircleButton
                    link={link.url}
                    titel={link.text}
                />
            </div>
        </header>
    );
}