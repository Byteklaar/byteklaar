import Link from "next/link";

export function LinkButton({link, tekst, color}) {
    return (
        <Link className={`text-white px-8 py-6 rounded-full inline-block bg-${color}`} href={link}>{tekst}</Link>
    );
}