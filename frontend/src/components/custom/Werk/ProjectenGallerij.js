import Link from "next/link";

export function ProjectenGallerij({data}) {
    return (
        <div className="flex row">
            {data.map((project) => (
                <div key={project.id}>
                    <h2 className="text-8xl w-10/12">{project.titel}</h2>
                    <p className="text-xl w-10/12">{project.beschrijving}</p>
                </div>
            ))}
        </div>
    );
}