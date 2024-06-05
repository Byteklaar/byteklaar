'use client';

import {BigStep} from "@/components/ui/BigStep";
import {LinkButton} from "@/components/ui/LinkButton";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import {Step} from "@/components/ui/Step";
import Image from "next/image";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function showLink(link) {
    if (link) {
        return (
            <LinkButton link={link.url} tekst={link.text} textColor="white" bgColor="byte-blue"/>
        )
    }
    return null;
}

export function StepSection({data}) {
    const {titel, beschrijving, stap, link} = data;

    useGSAP(() => {
        const steps = document.querySelectorAll('.step');

        ScrollTrigger.defaults({
            // Defaults are used by all ScrollTriggers
            //events: onEnter onLeave onEnterBack onLeaveBack
            toggleActions: "restart pause resume pause",
            //options: play, pause, resume, reset, restart, complete, reverse,none
            markers: true // Easily remove markers for production
        });
// END Setup ScrollTrigger -------------------------------------//
        let sections = gsap.utils.toArray(".step");

        const timeline = gsap.timeline({
            scrollTrigger: {
                id: "CONTAINER", // Custom label to the marker
                trigger: ".step-container", // What element triggers the scroll
                scrub: true, // Add a small delay of scrolling and animation. `true` is direct
                start: "top top+=10%+", // Can be top, center, bottom
                end: "+=100%", // Can be top, center, bottom
                pin: true
            }
        });

        let stagger = 1

        timeline
            .from(sections, {opacity: 0, stagger:stagger })
            .to(sections, {opacity: 0, stagger:stagger }, stagger)

        // let tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.step-container',
        //         start: '-150% center',
        //         end: '150% center',
        //         scrub: true,
        //         markers: true,
        //     }
        // })
        //
        // tl.fromTo(steps,
        //     {
        //         x: 500,
        //         duration: 2,
        //         opacity: 0,
        //     },
        //     {
        //         x: 0,
        //         opacity: 1,
        //         duration: 1,
        //         ease: 'none',
        //         stagger: 1
        //     },
        // )
    });
    return (
        <div className="container">
            <div className="px-16 my-16 mb-64">
                <h3 className="text-7xl w-6/12">{titel}</h3>
                <div className="flex flex-col step-container items-center content-center text-center mt-16 w-full">
                    {stap.map((stap, index) =>
                        <div id={`step-${index}`} className="step absolute" key={stap.id}>
                            <BigStep counter={index} titel={stap.text} beschrijving={stap.beschrijving} afbeelding={stap.afbeelding}/>
                        </div>
                    )}
                </div>
                <div className="w-4/12 mr-0 ml-auto mt-16">
                    <p className="mb-6 text-lg">{beschrijving}</p>
                    {showLink(link)}
                </div>
            </div>
        </div>
    );
}