'use client'

import Project from "../components/Project"
import data from "../projects.json"
import { motion } from "framer-motion"

function Projets() {

    return (

        <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className="card__list">
            {data.map((project, index) => (
                <li className="card">
                    <Project key={index} img={project.img} title={project.title} text={project.text} />
                </li>
            ))}
        </motion.ul>

    )
}

export default Projets