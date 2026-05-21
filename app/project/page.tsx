'use client'
import Project from "@/component/project/Project"
import Stack from "@/component/stack/Stack"
import Contact from "@/component/contact/Contact"
import styles from "./project.module.css"

import Image from "next/image"
import devboard from "@/public/projectImage/devboard.png"
import keyboard from "@/public/projectImage/keyboard.png"
import drone from "@/public/projectImage/drone.png"




export default function ProjectPage(){

    const data = [
        {
            "title" : "Custom Keybaord",
            "github_url": "https://github.com/AYUSH-pro-grammer/keyboard",
            "image":keyboard

        },

        {
            "title": "Devboard",
            "github_url": "https://github.com/AYUSH-pro-grammer/devboard",
            "image": devboard
        },
        {
            "title": "Drone",
            "github_url": "",
            "image": drone

        }
    ]
    return (
        <div>

            <aside>
                <h1>Project</h1>

                <div className={styles.whitebox}>

                    {

                        data.map((item: any) => {
                            return (
                                <div className={styles.box}> 
                                    <Image className={styles.boximage}  src={item.image} alt="project image"></Image>
                                    <h4>{item.title}</h4>

                                    {
                                        item.github_url ? (
                                            <a href={item.github_url}>Link</a>
                                        ):(
                                            <h6>Comming Soon
                                            </h6>
                                        )
                                    }
                                </div>
                            )
                        })

                    }

                </div>
            </aside>

            <Stack/>
            <Contact/>
        </div>
    )
}
