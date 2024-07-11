import Image from "next/image";

export function getStrapiURL() {
    return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
}

export function getStrapiMedia(url) {
    if (url == null) return null;
    if (url.startsWith("data:")) return url;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return `${getStrapiURL()}${url}`;
}

export function StrapiVideo({
                                src,
                                height,
                                width,
                                className,
                                controls,
                                autoplay,
                                muted
                            }) {
    if (!src) return null;
    const videoUrl = getStrapiMedia(src);
    const videoFallback = `https://placehold.co/${width}x${height}`;

    return (
        <video width={width} height={height} className={className} controls={controls} autoPlay={autoplay} muted>
            <source src={videoUrl} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    );

}