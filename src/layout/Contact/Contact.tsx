import { GlobalConstants } from "@/common/global-constants";
import { useRef, useState } from "react";
import ToastCenter from "@/components/Toast/ToastCenter";
import { toast } from "react-toastify";

import emailjs from "emailjs-com";

export default function Contact() {
    //input value name
    const [name, setName] = useState("");

    //reference ofinput Name
    const nameRef = useRef<HTMLInputElement>(null);

    //input value email
    const [email, setEmail] = useState("");

    //reference of email
    const emailRef = useRef<HTMLInputElement>(null);

    //input value subject
    const [subject, setSubject] = useState("");

    //reference of subject
    const subjectRef = useRef<HTMLInputElement>(null);

    //input value message
    const [message, setMessage] = useState("");

    //reference of message
    const messageRef = useRef<HTMLTextAreaElement>(null);

    //input value disabled submit
    const [disabled, setDisabled] = useState(false);

    //reference form
    const formRef = useRef<HTMLFormElement | null>(null);

    // listening to changes in name
    const nameOnChange = (event: any) => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    // listening to changes in email
    const emailOnChange = (event: any) => {
        setEmail(event.target.value);
    };

    // listening to changes in subject
    const subjectOnChange = (event: any) => {
        setSubject(event.target.value);
    };

    // listening to changes in message
    const messageOnChange = (event: any) => {
        setMessage(event.target.value);
    };

    const onSubmit = async (event: any) => {
        setDisabled(true);
        event.preventDefault();

        if (formRef.current) {
            const res = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
            console.log(res);

            emailjs
                .sendForm(
                    "emailJs_service",
                    "template_3wwzfpc",
                    formRef.current,
                    process.env.emailJs_pk
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        toast.success("Send Mail : Success");
                        setDisabled(false);
                    },
                    (error) => {
                        toast.error("Send Mail : Failed");
                        setDisabled(false);
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <div className="row mt-1">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location:</h4>
                                <p>{GlobalConstants.localisation}</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>{GlobalConstants.email}</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Call:</h4>
                                <p>{GlobalConstants.phone1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form ref={formRef} onSubmit={onSubmit} method="POST">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        ref={nameRef}
                                        value={name}
                                        placeholder="Your Name"
                                        required={true}
                                        onChange={nameOnChange}
                                    />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        ref={emailRef}
                                        value={email}
                                        placeholder="Your Email"
                                        required={true}
                                        onChange={emailOnChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    ref={subjectRef}
                                    value={subject}
                                    placeholder="Subject"
                                    required={true}
                                    onChange={subjectOnChange}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    rows={5}
                                    name="message"
                                    placeholder="Message"
                                    ref={messageRef}
                                    value={message}
                                    required={true}
                                    onChange={messageOnChange}
                                />
                            </div>
                            <br />
                            <div className="text-center">
                                {!disabled && (
                                    <button
                                        onClick={() => onSubmit}
                                        className="btn btn-dark"
                                        type="submit"
                                        disabled={disabled}
                                    >
                                        Send Message
                                    </button>
                                )}

                                {disabled && (
                                    <button
                                        className="btn btn-dark"
                                        disabled={disabled}
                                    >
                                        Wait ....
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastCenter />
        </section>
    );
}
