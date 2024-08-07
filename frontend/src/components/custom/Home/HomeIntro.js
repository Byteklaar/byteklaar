'use client';
import {StrapiVideo} from "@/components/custom/StrapiVideo";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {isMobileSafari} from 'react-device-detect';
import {StrapiImage} from "@/components/custom/StrapiImage";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
}

export function HomeIntro({data}) {
    const {LogoAnimation} = data;

    useGSAP(() => {
        gsap.to('.strapiAnimation', {
            delay: 2.55,
            y: -5000,
            opacity: 1,
            duration: 1.25,
            ease: 'power3.in'
        })
    });

    return (
        <div>
            {isMobileSafari ?
                <div></div>
                // <div className="strapiAnimation absolute top-0 z-50 bg-byte-blue overflow-hidden">
                //     <StrapiImage
                //         className="h-[100vh] py-32 w-screen"
                //         height={2560}
                //         src={LogoAnimation.url}
                //         width={2560}
                //     />
                // </div>
                :
                <div className="strapiAnimation absolute top-0 z-50 bg-byte-blue overflow-hidden">
                    <StrapiVideo
                        className="h-[100vh] py-32 w-screen"
                        controls={false}
                        autoplay={true}
                        muted={true}
                        height={2560}
                        src={LogoAnimation.url}
                        width={2560}
                    />
                </div>
            }
        </div>
    );
}