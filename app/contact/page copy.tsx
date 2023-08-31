"use client"

import 'dotenv/config';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"

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
        <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='flex flex-col justify-center items-center' ref={form} onSubmit={sendEmail}>
            <h1 className='text-xl'>Contact</h1>
            <label>Nom Prénom</label>
            <input className='w-80' type="text" name="user_name" />
            <label>Email</label>
            <input className='w-80' type="email" name="user_email" />
            <label>Message</label>
            <textarea className='w-80' name="message" rows={10} cols={50} />
            <input type="submit" value="Envoyer" />
        </motion.form>
    );
};

export default Contact