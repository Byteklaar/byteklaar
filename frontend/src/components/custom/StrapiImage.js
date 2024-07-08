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

export function StrapiImage({
                                src,
                                alt,
                                height,
                                width,
                                className,
                            }) {
    if (!src) return null;
    const imageUrl = getStrapiMedia(src);
    const imageFallback = `https://placehold.co/${width}x${height}`;

    return (
        <Image
            src={imageUrl ?? imageFallback}
            quality={80}
            alt={alt}
            height={height}
            width={width}
            className={className}
        />
    );

}