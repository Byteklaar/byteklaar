"use client";

import {LinkButton} from "@/components/ui/LinkButton";
import React, {useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {SplitText} from "@/lib/SplitText.min.js";
import Script from "next/script";
import {BigStep} from "@/components/ui/BigStep";
import BlockRendererClient from "@/app/BlockRendererClient";
import {StrapiImage} from "@/components/custom/StrapiImage";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    gsap.registerPlugin(SplitText);
}

function showLink(link) {
    if (link) {
        return (
            <LinkButton
                link={link.url}
                tekst={link.text}
                textColor="white"
                bgColor="byte-blue"
            />
        );
    }
    return null;
}

export function StepSectionAnimation({data}) {
    const {titel, beschrijving, stap, link} = data;
    useEffect(() => {
        const initializeGsap = () => {
            gsap.registerPlugin(ScrollTrigger, SplitText);

            if (
                typeof window !== "undefined" &&
                window.gsap &&
                window.ScrollTrigger &&
                window.SplitText
            ) {
                // Ensure all DOM elements are available
                if (
                    document.querySelectorAll(".text-item").length > 0 &&
                    document.querySelector(".text-container") &&
                    document.querySelectorAll(".small-circle-line").length > 0 &&
                    document.querySelectorAll(".small-circle").length > 0
                ) {
                    let tl = gsap.timeline();

                    let textItems = document.querySelectorAll(".text-item");

                    const textContainer = document.querySelector(".text-container");
                    const circle = document.querySelector(".main-circle");

                    ScrollTrigger.create({
                        trigger: textContainer,
                        start: "top top",
                        end: "bottom bottom",
                        onToggle: (self) => {
                            if (self.isActive) {
                                gsap.set(circle, {
                                    position: "fixed",
                                    transform: "translate(-50%, -50%)",
                                    top: 50 + "vh",
                                    bottom: "auto",
                                });
                            } else {
                                if (self.progress >= 1) {
                                    gsap.set(circle, {
                                        position: "absolute",
                                        transform: "translate(-50%, 50%)",
                                        bottom: 50 + "vh",
                                        top: "auto",
                                    });
                                } else if (self.progress <= 0) {
                                    gsap.set(circle, {
                                        position: "absolute",
                                        transform: "translate(-50%, -50%)",
                                        top: 50 + "vh",
                                        bottom: "auto",
                                    });
                                }
                            }
                        },
                    });

                    const start = "top center";
                    const end = "bottom top";
                    const scrub = 0.5;
                    const rotate = window.innerWidth <= 767 ? 310 : 280;

                    //   First number

                    let tl0 = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".text-item--0",
                            start: start,
                            end: end,
                            scrub: scrub,
                            anticipatePin: 1, // Adds a slight anticipation for a more natural feel
                        },
                    });

                    tl0.to(".small-circle--0", {
                        rotation: rotate,
                        transformOrigin: "50% 50%",
                    });

                    tl0.to(
                        ".small-circle-line--0",
                        {
                            rotation: -rotate,
                            //   x: "-2.5em",
                            transformOrigin: "right !important",
                        },
                        "<"
                    );

                    //   Second number

                    let tl1 = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".text-item--1",
                            start: start,
                            end: end,
                            anticipatePin: 1, // Adds a slight anticipation for a more natural feel
                            scrub: scrub,
                        },
                    });
                    tl1.to(".small-circle--1", {
                        rotation: rotate,
                        transformOrigin: "50% 50%",
                    });

                    tl1.to(
                        ".small-circle-line--1",
                        {
                            rotation: -rotate,
                            //   x: "-2.5em",
                            transformOrigin: "right !important",
                        },
                        "<"
                    );

                    //   Third number

                    let tl2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".text-item--2",
                            start: start,
                            end: end,
                            scrub: scrub,
                            anticipatePin: 1, // Adds a slight anticipation for a more natural feel
                        },
                    });
                    tl2.to(".small-circle--2", {
                        rotation: rotate,
                        transformOrigin: "50% 50%",
                    });

                    tl2.to(
                        ".small-circle-line--2",
                        {
                            rotation: -rotate,
                            //   x: "-2.5em",
                            transformOrigin: "right !important",
                        },
                        "<"
                    );

                    //   Fourth number

                    let tl3 = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".text-item--3",
                            start: start,
                            end: end,
                            anticipatePin: 1, // Adds a slight anticipation for a more natural feel
                            scrub: scrub,
                        },
                    });
                    tl3.to(".small-circle--3", {
                        rotation: rotate,
                        transformOrigin: "50% 50%",
                    });

                    tl3.to(
                        ".small-circle-line--3",
                        {
                            rotation: -rotate,
                            //   x: "-2.5em",
                            transformOrigin: "right !important",
                        },
                        "<"
                    );

                    //   Fifth number

                    let tl4 = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".text-item--4",
                            start: start,
                            end: end,
                            scrub: scrub,
                            anticipatePin: 1, // Adds a slight anticipation for a more natural feel
                        },
                    });
                    tl4.to(".small-circle--4", {
                        rotation: rotate,
                        transformOrigin: "50% 50%",
                    });

                    tl4.to(
                        ".small-circle-line--4",
                        {
                            rotation: -rotate,
                            //   x: "-2.5em",
                            transformOrigin: "right !important",
                        },
                        "<"
                    );

                    textItems.forEach((item, index) => {
                        let textSplit = new SplitText(
                            item.querySelector(`.text-item__text`),
                            {
                                type: "lines",
                                linesClass: `line`,
                            }
                        );

                        textSplit.lines.forEach((line) => {
                            gsap.to(line, {
                                scrollTrigger: {
                                    trigger: `.text-item--${index}`,
                                    start: "top center+=10%",
                                    end: "bottom 50%",
                                    toggleActions: "play none none reverse",
                                },
                                opacity: 1,
                                duration: 1,
                                ease: "power1.inOut",
                            });
                        });

                        ScrollTrigger.config({
                            autoRefreshEvents: "load",
                        });

                        ScrollTrigger.observe({
                            trigger: "body",
                            target: window,
                            type: "touch,pointer,scroll,wheel", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
                            onUp: () => {
                                ScrollTrigger.refresh();
                            },
                            onDown: () => {
                                ScrollTrigger.refresh();
                            },
                        });
                    });
                } else {
                    // Retry initialization if DOM elements are not yet available
                    setTimeout(initializeGsap, 100);
                }
            }
        };

        // Ensure gsap is available globally before running the script
        if (
            typeof window !== "undefined" &&
            window.gsap &&
            window.ScrollTrigger &&
            window.SplitText
        ) {
            initializeGsap();
        } else {
            window.addEventListener("load", initializeGsap);
            window.addEventListener("load", () => {
                ScrollTrigger.refresh();
            });
        }
    }, []);
    return (
        <>
            <div className="hidden md:block">
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
                        {stap.map((stap, index) =>
                            <div key={stap.id} className={`relative text-item text-item--${index}`}>
                                <div class="flex justify-end">
                                    <StrapiImage
                                        className="w-9/12 md:w-6/12 mb-2"
                                        alt={stap.text}
                                        src={stap.afbeelding.url}
                                        height={3048}
                                        width={2024}
                                    />
                                </div>
                                <div>
                                    <p className="text-item__title text-2xl md:text-5xl mb-2">{stap.text}</p>
                                    <div className="text-item__text text-base md:text-lg w-full md:w-4/12">
                                        <BlockRendererClient content={stap.beschrijving}/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="block md:hidden container px-8 lg:px-16">
                <div>
                    {stap.map((stap, index) =>
                        <div key={stap.id} className="relative">
                            <div className="flex justify-end">
                                <StrapiImage
                                    className="w-9/12 md:w-6/12 mb-2"
                                    alt={stap.text}
                                    src={stap.afbeelding.url}
                                    height={3048}
                                    width={2024}
                                />
                            </div>
                            <div>
                                <p className="mb-4 flex justify-center items-center rounded-full w-32 h-32 border border-black">{index+1}</p>
                                <p className="text-2xl md:text-5xl mb-2">{stap.text}</p>
                                <div className="text-base md:text-lg w-full md:w-4/12">
                                    <BlockRendererClient content={stap.beschrijving}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
