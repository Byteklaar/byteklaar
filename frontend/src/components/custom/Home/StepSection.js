'use client';

import {Step} from "@/components/ui/Step";
import {LinkButton} from "@/components/ui/LinkButton";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {useGSAP} from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function StepSection({data}) {
    const {titel, beschrijving, stap, link} = data;

    useGSAP(() => {
        const steps = document.querySelectorAll('.step');

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.step-container',
                start: '-350% center',
                end: '150% center',
                scrub: true,
            }
        })

        tl.fromTo(steps,
            {
                x: 500,
                duration: 2,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'none',
                stagger: 1
            },
            )
    });
    return (
        <div className="container">
            <div className="px-16 my-16">
                <h3 className="text-7xl w-6/12">{titel}</h3>
                <div className="grid grid-cols-6 items-center step-container content-center text-center mt-16 w-full">
                    {stap.map((stap, index) =>
                        <div id={`step-${index}`} className="step" key={stap.id}>
                            <Step counter={index} text={stap.text}/>
                        </div>
                    )}
                </div>
                <div className="w-4/12 mr-0 ml-auto mt-16">
                    <p className="mb-6 text-lg">{beschrijving}</p>
                    <LinkButton link={link.url} tekst={link.text} textColor="white" bgColor="byte-blue"/>
                </div>
            </div>
        </div>
    );
}