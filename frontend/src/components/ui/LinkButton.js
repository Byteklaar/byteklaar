export function LinkButton({link, tekst, color}) {
    return (
        <div>
            <a className={`bg-${color} text-white px-8 py-6 rounded-full inline-block`} href={link}>{tekst}</a>
        </div>
    );
}