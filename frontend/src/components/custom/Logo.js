import Link from "next/link";
import Image from "next/image";
import {StrapiImage} from "@/components/custom/StrapiImage";

const logoProps = {
    dark: false,
    url: "",
}

export function Logo({
    dark = false,
    url = "",
                     }) {
    return (
        <Link href="/">
            <StrapiImage
                alt="Background"
                height={100}
                src={url}
                width={250}
            />
        </Link>
    )
}