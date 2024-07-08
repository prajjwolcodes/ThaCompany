import React from 'react'
import { motion } from "framer-motion"


const Clients = () => {
    const clients = [
        {
            src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
            alt: "react",
        },
        {
            src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg",
            alt: "node",
        },
        {
            src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
            alt: "mongodb",
        },
        {
            src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
            alt: "express",
        },
        {
            src: "https://www.vectorlogo.zone/logos/js_redux/js_redux-ar21.svg",
            alt: "redux",
        },
        {
            src: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg",
            alt: "typescript",
        },
        {
            src: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg",
            alt: "sass",
        },
        {
            src: "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg",
            alt: "firebase",
        },
        {
            src: "https://www.vectorlogo.zone/logos/figma/figma-ar21.svg",
            alt: "figma",
        },

        {
            src: "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
            alt: "github",
        },

        {
            src: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
            alt: "Docker",
        },
        {
            src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg",
            alt: "Kubernetes",
        },
        {
            src: "https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg",
            alt: "Nest.js",
        },

        {
            src: "https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg",
            alt: "GraphQL",
        },

        {
            src: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg",
            alt: "Jest",
        },

        {
            src: "https://www.vectorlogo.zone/logos/redis/redis-ar21.svg",
            alt: "Redis",
        },

        {
            src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
            alt: "PostgreSQL",
        },
        {
            src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg",
            alt: "Jenkins",
        },
    ];
    return (
        <div className='px-20 flex flex-col justify-center items-center my-10'>
            <h1 className='text-4xl font-semi-bold tracking-wider my-10'>OUR CLIENTS</h1>
            <div className='grid grid-cols-6 gap-10'>
                {clients.map((client, i) => (
                    <div className='w-32 h-16'>
                        <motion.img
                            initial={{
                                opacity: 0,
                                x: -10,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: i / 20,
                                    ease: "circIn",
                                },
                            }}
                            src={client.src}
                            alt={client.alt}
                            key={i}
                        />
                    </div>
                ))}
            </div>
            <h1 className='mt-20 '>Trusted By 100+ Companies in 30+ Countries</h1>
        </div>
    )
}

export default Clients