export function Contact({data}) {

    function handleSubmit() {
        const formBody = `firstName=${encodeURIComponent(Voornaam)}&email=${encodeURIComponent(E-mail)}`;

        // const formBody = `firstName=${encodeURIComponent(Naam)}&lastName=${encodeURIComponent(Voornaam)}&userGroup=${encodeURIComponent(userGroup)}&Bedrijf=${encodeURIComponent(Bedrijf)}&Fase=${encodeURIComponent(Fase)}&Telefoon=${encodeURIComponent(Telefoon)}&email=${encodeURIComponent(E-mail)}&Vraag=${encodeURIComponent(Vraag)}`;

        // Change this URL to your own endpoint URL
        fetch("https://app.loops.so/api/newsletter-form/clw3p9dyl039ts88steniolch", {
            method: "POST",
            body: formBody,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }

    return (
        <form method="post" action="https://app.loops.so/api/newsletter-form/clw3p9dyl039ts88steniolch"
              className="flex flex-col lg:grid lg:grid-flow-row lg:grid-cols-2 gap-x-8 gap-y-3">
            <input type="hidden" name="userGroup" value="Website contactForm"/>
            {data.field.map((field) => (
                field.type === "textarea" ? (
                    <textarea
                        className="border-2 col-start-2 row-start-2 row-span-3 placeholder:text-white text-white py-2 px-6 border-white rounded-3xl bg-transparent"
                        key={field.id}
                        placeholder={field.naam}
                        rows={5}
                        required={field.verplicht}
                        name={field.naam}
                    />
                ) : (
                    <input
                        className="border-2 col-start-1 col-end-1 placeholder:text-white text-white py-2 px-6 border-white rounded-full bg-transparent"
                        key={field.id}
                        type={field.type}
                        placeholder={field.naam}
                        required={field.verplicht}
                        name={field.naam}
                    />
                )
            ))}
            <select
                className="col-start-2 col-end-2 row-start-1 border-2 appearance-none outline-none placeholder:text-white text-white py-2 px-6 border-white rounded-3xl bg-transparent"
                name="Fase" id="Fase" required={data.dropdownVerplicht}>
                <option defaultValue>{data.dropdownDefault}</option>
                {data.dropdown.map((field) => (
                    <option key={field.id} value={field.titel}>{field.titel}</option>
                ))}
            </select>
            <input
                className="col-start-2 col-end-2 hover:bg-white hover:text-byte-blue cursor-pointer ease-in-out duration-150 p-2 border-2 border-white text-white rounded-full block"
                type="submit"
                value="Versturen"/>
        </form>
    )
}