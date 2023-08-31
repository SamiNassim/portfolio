'use client'

import Link from "next/link"
import Project from "../components/Project"
import data from "../projects.json"
import { motion } from "framer-motion"

function Projets() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }} className="flex justify-center items-center flex-col">
            <h1 className="text-4xl">Projets</h1>
            <ul className="card__list">
                {data.map(project => (

                    <li key={project.id} className="card">
                        <Project img={project.img} title={project.title} text={project.text} url={project.url} />
                    </li>

                ))}
            </ul>
        </motion.div>

    )
}

export default Projets