'use client';
import {useEffect, useState} from 'react';

export function ContactForm({data}) {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        console.log(formData);
    };


    function handleSubmit(e) {
        var Brevo = require('@getbrevo/brevo');
        var defaultClient = Brevo.ApiClient.instance;

        // Configure API key authorization: api-key
        var apiKey = defaultClient.authentications['api-key'];
        apiKey.apiKey = process.env.BREVO_API_KEY;
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //apiKey.apiKeyPrefix = 'Token';

        var apiInstance = new Brevo.TransactionalEmailsApi();

        var sendSmtpEmail = new Brevo.SendSmtpEmail({

            "sender": {"email": "info@mails.byteklaar.be", "name": "Byteklaar"},
            "subject": "Nieuwe inzending vanaf de website!",
            "htmlContent": `<!DOCTYPE html><html><body><h1>Hey Bram</h1><p>Nieuwe inzending vanaf het contactformulier!</p><p>${formData}</p></body></html>`,
            "messageVersions": [
                //Definition for Message Version 1
                {
                    "to": [
                        {
                            "email": "info@byteklaar.be",
                            "name": "Bram Dupont"
                        }
                    ]
                },

                // Definition for Message Version 2
                // TODO Add email address to Loops.so
                {
                    "to": [
                        {
                            "email": formData['email'],
                            "name": formData['name']
                        },
                    ],
                    "htmlContent": "<!DOCTYPE html><html><body><h1>Beste</h1><p>We hebben je inzending goed ontvangen en nemen zo snel mogelijk contact met je op.</p></body></html>",
                    "subject": "We hebben je inzending goed ontvangen!"
                }
            ]

        }); // SendSmtpEmail | Values to send a transactional email

        apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
            console.log('API called successfully. Returned data: ' + data);
        }, function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            {formSuccess ?
                <div>Formulier succesvol verzonden.</div>
                :
                <form method="post" action="https://app.loops.so/api/v1/transactional"
                      onSubmit={handleSubmit}
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
                                onChange={handleInput}
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
                    <button
                        className="col-start-2 col-end-2 hover:bg-white hover:text-byte-blue cursor-pointer ease-in-out duration-150 p-2 border-2 border-white text-white rounded-full block"
                        type="submit"
                    >Versturen
                    </button>
                </form>
            }
        </div>
    );
}