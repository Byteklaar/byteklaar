export function LinkButton({link, tekst, color}) {
    return (
        <div>
            <a className={`text-white px-8 py-6 rounded-full inline-block bg-${color}`} href={link}>{tekst}</a>
        </div>
    );
}