'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { about } from "@/app/resource/content"

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
}


const AboutPageData = () => {
    return (
        <div className="overflow-auto md:overflow-hidden"> {about &&
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full flex flex-col"
            >
                <div className="w-full min-h-[1000px] md:min-h-[calc(100vh-80px)] p-10 ">
                    <div className="w-full h-3/4 flex flex-col md:flex-row items-center md:items-start gap-5">
                        <div className="md:w-1/3 w-[200px] h-[200px] md:h-[400px] relative">
                            <Image
                                src="/me.jpg"
                                alt="About Image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                        <div className="w-full h-[700px] md:h-full flex flex-col gap-5 md:gap-2">

                            <div className="w-full h-auto md:h-1/3 p-3 flex flex-col bg-white shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                                <p className="text-3xl">{about.aboutmeTitle}</p>
                                <p>{about.description}</p>
                            </div>

                            <div className="w-full h-auto md:h-1/3 flex flex-col p-3 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                                <p className="text-3xl">{about.educationTitle}</p>
                                <p className="text-lg">{about.education}</p>
                                <p className="text-lg">{about.bachelor}</p>
                            </div>

                            <div className="w-full h-auto md:h-1/3 flex flex-col p-3 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.5)] mb-3">
                                <p className="text-3xl">{about.hobbiesTitle}</p>
                                <p className="text-lg">{about.hobbies}</p>
                                <div className="w-full h-full flex flex-col md:flex-row mt-2">
                                    <p className="text-lg mr-10">{about.gameDiscription}</p>
                                    <div className="w-full md:w-[50%] h-auto flex">
                                        {about.game && about.game.map((g,i) => (
                                            <div key={i} className="w-[30px] h-[30px] relative mr-2 ml-2">
                                                <Image 
                                                    src={g.img}
                                                    alt={g.alt}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-md transition-transform duration-300 hover:scale-120"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        }
        </div>
    )
}
export default AboutPageData