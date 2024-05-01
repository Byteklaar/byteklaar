import Link from "next/link";
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
                alt="Logo Byteklaar"
                height={100}
                src={url}
                width={250}
            />
        </Link>
    )
}