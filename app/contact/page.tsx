"use client"

import 'dotenv/config';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm("service_0xdx0sa" as string, "template_cmvjt1e" as string, form.current as any, "2QRv6mxMSKOg_8Mqz")
            .then((result) => {
                alert("Message envoyé !");
            }, (error) => {
                alert(error.text);
            });
    };

    return (
        <form className='flex flex-col justify-center items-center' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Contact