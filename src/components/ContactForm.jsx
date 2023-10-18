import React from 'react';
import './contactForm.css';

function ContactForm() {

    return (
        <form action="https://getform.io/f/a8940881-04f5-47e6-93bf-bfde0fc31015" method="post" className="contact-form mt-4" >
            <div className="row">
                <div className="col-md-6 form-group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Prenom + Nom"
                    />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Votre Email"
                    />
                </div>
            </div>
            <div className="form-group mt-3">
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Sujet"
                />
            </div>
            <div className="form-group mt-3">
                <textarea
                    name="message"
                    id="message"
                    rows="6"
                    className="form-control"
                    placeholder="Votre Message">
                </textarea>
            </div>
            <div className="text-center">
                <button type="submit">Envoyer le message</button>
            </div>
        </form>
    );
};

export default ContactForm