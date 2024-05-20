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

    const file = getStrapiMedia(src);
    const fileType = file['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (!validImageTypes.includes(fileType)) {
        return (
            <video width="320" height="240" autoPlay muted preload="none">
                <source src={imageUrl} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        );
    } else if (validImageTypes.includes(fileType)) {
        return (
            <Image
                src={imageUrl ?? imageFallback}
                alt={alt}
                height={height}
                width={width}
                className={className}
            />
        );
    }
}