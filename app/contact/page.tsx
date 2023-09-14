"use client"

import 'dotenv/config';
import React from 'react';
import { motion } from "framer-motion"
import Link from 'next/link';

function Contact() {

    return (
        <div className='flex justify-center items-center flex-col'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className='contact flex justify-center items-center flex-col mb-10'>
                <h1 className='text-4xl mb-10'>Contact</h1>
                <p className='p-4 mb-10'>
                    Si vous souhaitez discuter de projets web passionnants, n'hésitez pas à me contacter !<br />
                    En tant que développeur web expérimenté, je suis là pour répondre à toutes vos questions et vous accompagner dans vos besoins en développement.<br />
                    Que vous ayez une idée de projet en tête, que vous souhaitiez améliorer un site existant ou que vous cherchiez simplement des conseils techniques, je suis là pour vous aider.<br />
                    Mon objectif est de vous fournir des solutions sur mesure, adaptées à vos besoins spécifiques.<br />
                    N'hésitez pas à me contacter via LinkedIn. Je serai ravi de discuter avec vous et de collaborer pour réaliser vos objectifs web.
                </p>
                <Link href="https://www.linkedin.com/in/sami-bououdine">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="#1265BF" />
                        <path d="M10.7738 14.9066C13.0735 14.9066 14.9378 13.0423 14.9378 10.7426C14.9378 8.44289 13.0735 6.57861 10.7738 6.57861C8.4741 6.57861 6.60982 8.44289 6.60982 10.7426C6.60982 13.0423 8.4741 14.9066 10.7738 14.9066Z" fill="white" />
                        <path d="M18.7513 17.9839H25.6524V21.1453C25.6524 21.1453 27.5251 17.3999 32.6204 17.3999C37.1657 17.3999 40.931 19.639 40.931 26.464V40.856H33.7795V28.2079C33.7795 24.1818 31.63 23.739 29.9921 23.739C26.593 23.739 26.011 26.671 26.011 28.7331V40.856H18.7513V17.9839Z" fill="white" />
                        <path d="M7.14395 17.9839H14.4037V40.856H7.14395V17.9839Z" fill="white" />
                    </svg>
                </Link>
            </motion.div>
        </div>
    );
};

export default Contact