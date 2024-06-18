'use client';

import {LinkButton} from "@/components/ui/LinkButton";
import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import {SplitText} from "@/lib/SplitText.min.js";
import Script from "next/script";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(SplitText);
}

function showLink(link) {
    if (link) {
        return (
            <LinkButton link={link.url} tekst={link.text} textColor="white" bgColor="byte-blue"/>
        )
    }
    return null;
}

export function StepSectionAnimation() {
    useEffect(() => {
        const initializeGsap = () => {
            gsap.registerPlugin(ScrollTrigger, SplitText);
            let tl = gsap.timeline();

            let textItems = document.querySelectorAll('.text-item');

            textItems.forEach((item, index) => {
                // Rotate the small circles
                tl.to(`.small-circle-line--${index}`, {
                    scrollTrigger: {
                        trigger: `.text-item--${index} `,
                        start: "top bottom",
                        end: "bottom top",
                        scroller: `.text-container`,
                        scrub: true, // Enable smooth transition based on scroll position
                        onUpdate: (self) => {
                            const scrollPosition = self.progress; // Get the scroll position (0 to 1)
                            const rotation = -360 * scrollPosition; // Calculate rotation based on scroll position
                            gsap.set(`.small-circle-line--${index}`, {
                                rotation: rotation,
                                x: '-2.5em',
                                transformOrigin: "right"
                            });
                            gsap.set(`.small-circle--${index}`, {rotation: -rotation, transformOrigin: "50% 50%"});
                        },
                    }
                });

                let textSplit = new SplitText(item.querySelector(`.text-item__text`), {
                    type: "lines",
                    linesClass: `line`
                });

                textSplit.lines.forEach((line) => {
                    gsap.to(line, {
                        scrollTrigger: {
                            trigger: `.text-item--${index}`,
                            start: "top 40%",
                            end: "bottom 50%",
                            scroller: `.text-container`,
                            toggleActions: "play none none reverse"
                        },
                        opacity: 1,
                        duration: 1,
                        ease: 'power1.inOut'
                    });
                });
            });
        };

        // Ensure gsap is available globally before running the script
        if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger && window.SplitText) {
            initializeGsap();
        } else {
            window.addEventListener('load', initializeGsap);
        }
    }, []);
    return (
        <>
            <div className="animation-wrapper">
                <div className="main-circle">
                    <div className="small-circle-line small-circle-line--0">
                        <div className="small-circle small-circle--0">1</div>
                    </div>
                    <div className="small-circle-line small-circle-line--1">
                        <div className="small-circle small-circle--1">2</div>
                    </div>
                    <div className="small-circle-line small-circle-line--2">
                        <div className="small-circle small-circle--2">3</div>
                    </div>
                    <div className="small-circle-line small-circle-line--3">
                        <div className="small-circle small-circle--3">4</div>
                    </div>
                    <div className="small-circle-line small-circle-line--4">
                        <div className="small-circle small-circle--4">5</div>
                    </div>
                </div>

                <div className="text-container">
                    <div className="text-item text-item--0">
                        <div className="text-item__title">Kennismaking</div>
                        <div className="text-item__text">
                            Hoe krijg je je diensten of je software helder gepresenteerd in een uitnodigende website?
                            Byteklaar
                            biedt oplossingen voor vooruitstrevende bedrijven. Met onze websites op maat kies je voor
                            een
                            duurzame en secure aanpak. Je houdt er een partner aan over, die na oplevering van de site
                            inzet op
                            ijzersterke ondersteuning.
                        </div>
                    </div>
                    <div className="text-item text-item--1">
                        <div className="text-item__title">Webdesign</div>
                        <div className="text-item__text">Hoe krijg je je diensten of je software helder gepresenteerd in
                            een
                            uitnodigende website? Byteklaar biedt oplossingen voor vooruitstrevende bedrijven. Met onze
                            websites
                            op maat kies je voor een duurzame en secure aanpak. Je houdt er een partner aan over, die na
                            oplevering van de site inzet op ijzersterke ondersteuning.
                        </div>
                    </div>
                    <div className="text-item text-item--2">
                        <div className="text-item__title">Webdevelopment</div>
                        <div className="text-item__text">Hoe krijg je je diensten of je software helder gepresenteerd in
                            een
                            uitnodigende website? Byteklaar biedt oplossingen voor vooruitstrevende bedrijven. Met onze
                            websites
                            op maat kies je voor een duurzame en secure aanpak. Je houdt er een partner aan over, die na
                            oplevering van de site inzet op ijzersterke ondersteuning.
                        </div>
                    </div>
                    <div className="text-item text-item--3">
                        <div className="text-item__title">Structuur bepalen</div>
                        <div className="text-item__text">Hoe krijg je je diensten of je software helder gepresenteerd in
                            een
                            uitnodigende website? Byteklaar biedt oplossingen voor vooruitstrevende bedrijven. Met onze
                            websites
                            op maat kies je voor een duurzame en secure aanpak. Je houdt er een partner aan over, die na
                            oplevering van de site inzet op ijzersterke ondersteuning.
                        </div>
                    </div>
                    <div className="text-item text-item--4">
                        <div className="text-item__title">Hosting & Support</div>
                        <div className="text-item__text">Hoe krijg je je diensten of je software helder gepresenteerd in
                            een
                            uitnodigende website? Byteklaar biedt oplossingen voor vooruitstrevende bedrijven. Met onze
                            websites
                            op maat kies je voor een duurzame en secure aanpak. Je houdt er een partner aan over, die na
                            oplevering van de site inzet op ijzersterke ondersteuning.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}