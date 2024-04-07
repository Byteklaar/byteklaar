import Link from "next/link";

export function LinkButton({link, tekst, bgColor, textColor}) {
    // TODO isExternal logica toevoegen
    return (
        <Link className={`px-16 py-6 rounded-full inline-block bg-${bgColor} text-${textColor}`} href={link}>{tekst}</Link>
    );
}