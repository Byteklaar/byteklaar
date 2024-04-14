export function ProjectenGallerij({data}) {
    const {titel, beschrijving, extra_beschrijving, gallerij} = data;
    return (
        <div className="flex row">
            <div className="basis-3/5 px-16 my-16">
                <h2 className="text-8xl w-10/12">{titel}</h2>
            </div>
            <div className="basis-2/5 bg-byte-beige py-20 text-xl px-16">
            </div>
        </div>
    );
}