export function CircleButton({link, titel}) {
    return (
        <a className="follower absolute top-0 left-0 flex items-center content-center rounded-full p-4 w-56 h-56 bg-byte-terra"
           href={link}>{titel}</a>
    );
}