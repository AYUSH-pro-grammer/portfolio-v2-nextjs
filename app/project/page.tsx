'use client'
import Project from "@/component/project/Project"
import Stack from "@/component/stack/Stack"
import Contact from "@/component/contact/Contact"
import styles from "./project.module.css"

import Image from "next/image"
import devboard from "@/public/projectImage/devboard.png"
import keyboard from "@/public/projectImage/keyboard.png"
import drone from "@/public/projectImage/drone.png"


import blinkyboard from "@/public/projectImage/blinkyboard.png"
import hermes from "@/public/projectImage/hermes.png"
import keycaps from "@/public/projectImage/keycaps.png"
import pathfinder from "@/public/projectImage/pathfinder.png" 
import rccar from "@/public/projectImage/rccar.png"

import robodog from "@/public/projectImage/robodog.png" 
import splitkeyboard from "@/public/projectImage/splitkeyboard.png"
import flightcontroller from "@/public/projectImage/flightcontroller.png"

import imgA from "@/public/projectImage/imgA.png"
import imgB from "@/public/projectImage/imgB.png"


import hackpad from "@/public/projectImage/hackpad.png"     
import { useState } from "react"




export default function ProjectPage(){

    const filters = [
    "all",
    "featured",
    "completed",
    "in-progress",
    "graveyard",
    "hardware",
    "software",
]




    const [active, setActive] = useState(1)

    const changeActive = (index: number) => {
        setActive(index)
    }



    const data = [

        {
            title: "Custom Keyboard",
            github_url: "https://github.com/AYUSH-pro-grammer/keyboard",
            image: keyboard,
            demo: "",
            guide: "",
            tags: ["completed", "hardware", "featured"]
        },

        {
            title: "Devboard",
            github_url: "https://github.com/AYUSH-pro-grammer/devboard",
            image: devboard,
            demo: "",
            guide: "",
            tags: ["in-progress", "hardware", "featured"]
        },

        {
            title: "Drone",
            github_url: "",
            image: drone,
            demo: "",
            guide: "",
            tags: ["completed", "hardware", "featured"]
        },
        {
            title: "Hackpad",
            github_url: "https://github.com/AYUSH-pro-grammer/hackpad",
            image: hackpad,
            demo: "",
            guide:"",
            tags: ["completed", "hardware"]
        },

    {
        title: "Split Keyboard",
        github_url: "https://github.com/AYUSH-pro-grammer/split-keyboard",
        image: splitkeyboard,
        demo: "",
        guide: "",
        tags: ["in-progress", "hardware"]
    },

    {
        title: "Blinky Board",
        github_url: "https://github.com/AYUSH-pro-grammer/led-timer",
        image: blinkyboard,
        demo: "",
        guide: "",
        tags: ["completed", "hardware"]
    },

    {
        title: "Hermes",
        github_url: "https://github.com/AYUSH-pro-grammer/hermes",
        image: hermes,
        demo: "",
        guide: "",
        tags: ["in-progress", "hardware"]

    },

    {

        title: "Flight Controller",
        github_url: "https://github.com/AYUSH-pro-grammer/esp32-flight-controller",
        image: flightcontroller,
        demo: "",
        guide: "",
        tags: ["completed", "hardware"]

    },

    {
        title: "Keycaps",
        github_url: "https://github.com/AYUSH-pro-grammer/keycaps",
        image: keycaps,
        demo: "",
        guide: "",
        tags: ["in-progress", "hardware"]
    
    },
    {
        title: "Pathfinder",
        github_url: "https://github.com/AYUSH-pro-grammer/pathFinder",
        image: pathfinder,
        demo: "",
        guide: "",
        tags: ["in-progress", "hardware"],


    },
    {
        title: "RC camera car",
        github_url: "https://github.com/AYUSH-pro-grammer/rc-camera-car",
        image: rccar,
        demo: "",
        guide: "",
        tags: ["graveyard", "hardware"]
    },

    {

        title: "Robo Dog",
        github_url: "https://github.com/AYUSH-pro-grammer/robo-dog-esp32",
        image: robodog,
        demo: "",
        guide: "",
        tags: ["completed", "hardware"]
    },

    {
        title: "Advocate Manju Prajapati",
        github_url: "https://github.com/AYUSH-pro-grammer/advocate-manju-prajapati-v2",
        image: imgA,
        demo: "https://advocatemanjuprajapati.com",
        guide: "",
        tags: ["completed", "software", "featured"]
    }
    ,

    {
        title: "AM Divorce Lawyer",
        github_url: "https://github.com/AYUSH-pro-grammer/Divorce-Law-Firm",
        image: imgB,
        demo: "www.amdivorcelawyer.online",
        guide: "",
        tags: ["completed", "software", "featured"]
    
    }

    ]

    const renderData = data.filter((items) => {

        if ( items.tags.includes(filters[active]) || active === 0) {
            return true
        } else {
            return false
        }

    
    }

)






    return (
        <div>



            <aside>
                <h1>Project</h1>

                <div className={styles.filter} >

                    {
                        filters.map((item, index) => {
                            return (


                                <button className={active === index ? styles.selected: styles.filterbutton}

                        onClick={()=> changeActive(index)}
                    >{item}</button>


                            )
                        })
                    }
                    


                </div>

                <br/>



                <div className={styles.whitebox}>

                    {

                        renderData.map((item: any) => {
                            return (
                                <div className={styles.box}> 
                                    <Image className={styles.boximage}  src={item.image} alt="project image"></Image>
                                    <h4>{item.title}</h4>


                                    <div className={styles.linkBox}>

                                    {

                                        item.github_url ? (
                                            <a href={item.github_url}>Github</a>
                                        ):(
                                            <h6>Comming Soon
                                            </h6>
                                        )
                                    }


                                    {

                                        item.demo ? (
                                            <a href={item.demo}>Demo</a>
                                        ): ""
                                    }

                                    {
                                        item.guide ? (
                                            <a href={item.guide}>Guide</a>
                                        ): ""
                                    }



                                    </div>

                                   
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
