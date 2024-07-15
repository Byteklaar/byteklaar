"use client";

import {Step} from "@/components/ui/Step";
import {LinkButton} from "@/components/ui/LinkButton";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import Script from "next/script";
import React from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function StepSection({data}) {
    const {titel, beschrijving, stap, link} = data;

    useGSAP(() => {
        const steps = document.querySelectorAll(".step");

        steps.forEach((i) => {
            gsap.set(i, {x: 400, opacity: 0});
        });

        // Animation for each text item
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".animation_wrapper-chain",
                start: "top bottom-=100", // Start when the top of the trigger element hits the bottom of the viewport
                end: "bottom center-=100", // End when the bottom of the trigger element hits 100px above the center of the viewport
                scrub: 2, // Smooth scrubbing
                anticipatePin: 1, // Adds a slight anticipation for a more natural feel
            },
        });

        steps.forEach((item) => {
            tl.to(item, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "sine.out",
                stagger: 0.5,
                force3D: true,
            });
        });
    });
    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://dfrnc.com/lib/SplitText.min.js"
                strategy="beforeInteractive"
            />
            <div className="container mt-12 z-0">
                <div className="px-8 my-8 md:px-16 md:my-16">
                    <h3 className="text-4xl xl:text-7xl lg:text-6xl w-full md:w-6/12">
                        {titel}
                    </h3>
                    <div
                        className="animation_wrapper-chain grid grid-rows-5 lg:grid-rows-none lg:grid-cols-5 items-center step-container content-center text-center mt-16 w-full">
                        {stap.map((stap, index) => (
                            <div id={`step-${index}`} className="step" key={stap.id}>
                                <Step counter={index} text={stap.text}/>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-4/12 m-auto lg:mr-0 lg:ml-auto mt-8 lg:mt-16">
                        <p className="mb-6 text-lg">{beschrijving}</p>
                        <LinkButton
                            link={link.url}
                            tekst={link.text}
                            textColor="white"
                            bgColor="byte-blue"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
