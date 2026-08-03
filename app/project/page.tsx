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

import hackpad from "@/public/projectImage/hackpad.png"     
import { useState } from "react"



export default function ProjectPage(){


    const [active, setActive] = useState(1)

    const changeActive = (index: number) => {
        setActive(index)
    }

    const completed_data = [
        {
            "title" : "Custom Keybaord",
            "github_url": "https://github.com/AYUSH-pro-grammer/keyboard",
            "image":keyboard,
             "demo": "",
            "guide": ""

        },

        {
            "title": "Devboard",
            "github_url": "https://github.com/AYUSH-pro-grammer/devboard",
            "image": devboard,
             "demo": "",
            "guide": "",
        },
        {
            "title": "Drone",
            "github_url": "",
            "image": drone,
             "demo": "",
            "guide": "",

        },
        {

            "title" : "Hackpad",
            "github_url": "",
            "image": hackpad,
             "demo": "",
            "guide": "",
        }

    ]



    const pending_data = [
        {
            "title" : "Split Keyboard",
            "github_url": "https://github.com/AYUSH-pro-grammer/split-keyboard",
            "image":splitkeyboard,
            "demo": "",
            "guide": ""

        },

        {

            "title": "blinky timer board",
            "github_url": "https://github.com/AYUSH-pro-grammer/led-timer",
            "image": blinkyboard,
            "demo": "",
            "guide": "",
            
        },

        {
            "title": "Hermes",
            "github_url": "https://github.com/AYUSH-pro-grammer/hermes",
            "image": hermes,
            "demo": "",
            "guide": "",
        },
        {
            "title": "Flight Controller",
            "github_url": "https://github.com/AYUSH-pro-grammer/esp32-flight-controller",
            "image": flightcontroller,
        },
        {
            "title": "Keycaps", 
            "github_url": "https://github.com/AYUSH-pro-grammer/keycaps",
            "image": keycaps,
            "demo": "",
            "guide": "",
        }, {


            "title": "Path Finder",
            "github_url": "https://github.com/AYUSH-pro-grammer/pathFinder",
            "image" : pathfinder,
            "demo": "",
            "guide": "",
        },
        {
            "title": "RC Car",
            "github_url": "https://github.com/AYUSH-pro-grammer/rc-camera-car",
            "image": rccar,
            "demo": "",
            "guide": "",
        },
        {
            "title": "Robo Dog",
            "github_url": "https://github.com/AYUSH-pro-grammer/robo-dog-esp32",
            "image": robodog,
            "demo": "",
            "guide": "",
        }
    ]






    return (
        <div>



            <aside>
                <h1>Project</h1>

                <div className={styles.filter} >
                    <button className={active === 1 ? styles.selected: styles.filterbutton}

                        onClick={()=> changeActive(1)}
                    >Completed</button>


                    <button className={active === 2 ? styles.selected: styles.filterbutton}

                    onClick = {() => changeActive(2)}
                    

                    >In Progress</button>
                </div>

                <br/>

{
    active === 1 ? (


                <div className={styles.whitebox}>

                    {

                        completed_data.map((item: any) => {
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
    ):(

   <div className={styles.whitebox}>

                    {

                        pending_data.map((item: any) => {
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
    )
}


            </aside>

            <Stack/>
            <Contact/>
        </div>
    )
}
