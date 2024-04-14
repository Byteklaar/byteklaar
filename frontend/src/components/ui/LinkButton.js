import Link from "next/link";

export function LinkButton({link, tekst, bgColor, textColor}) {
    let target = "";
    if(link.isExternal) {
        target = "_blank";
    }
    target = "";
    return (
        <Link className={`px-16 py-6 border border-white duration-150 ease-in-out hover:border-${bgColor} hover:bg-${textColor} hover:text-${bgColor} rounded-full inline-block bg-${bgColor} text-${textColor}`}
              href={link} target={target}>{tekst}</Link>
    );
}
