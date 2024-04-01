export function CircleButton({link, titel}) {
    return (
        <div>
            <a className="flex items-center content-center rounded-full p-4 w-56 h-56 bg-byte-terra" href={link}>{titel}</a>
        </div>
    );
}