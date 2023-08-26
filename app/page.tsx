"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="flex justify-center items-center">
      <h1 className="mt-20 w-1/3"> Lorem ipsum dolor sit amet consectetur adipisicing elit.At asperiores possimus, voluptatibus exercitationem, accusamus facere, sunt recusandae quis impedit molestiae neque quibusdam ex reiciendis ipsam modi assumenda dignissimos aspernatur officia!</h1>
    </motion.div >

  )
}
