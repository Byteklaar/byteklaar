export function Contact({data}) {

    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            user: "vd27363",
            pass: "WW8JR9jg6utFJW0qniNyA6QiP7",
        },
    });

// async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Byteklaar" <info@byteklaar.be>', // sender address
            to: "", // list of receivers
            subject: "Nieuwe inzendig vanaf de website", // Subject line
            text: "Hello world?", // plain text body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    main().catch(console.error);

    return (
        <form action="" className="grid grid-flow-row grid-cols-2 gap-x-8 gap-y-3">
            {data.field.map((field) => (
                field.type === "textarea" ? (
                    <textarea
                        className="border-2 col-start-2 row-start-2 row-span-3 placeholder:text-white text-white py-2 px-6 border-white rounded-3xl bg-transparent"
                        key={field.id}
                        placeholder={field.naam}
                        rows={5}
                        required={field.verplicht}
                        id={field.naam}
                    />
                ) : (
                    <input
                        className="border-2 col-start-1 col-end-1 placeholder:text-white text-white py-2 px-6 border-white rounded-full bg-transparent"
                        key={field.id}
                        type={field.type}
                        placeholder={field.naam}
                        required={field.verplicht}
                        id={field.naam}
                    />
                )
            ))}
            <select
                className="col-start-2 col-end-2 row-start-1 border-2 appearance-none outline-none placeholder:text-white text-white py-2 px-6 border-white rounded-3xl bg-transparent"
                name="Fase" id="Fase" required={data.dropdownVerplicht}>
                <option selected>{data.dropdownDefault}</option>
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