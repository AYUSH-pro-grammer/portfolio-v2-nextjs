"use client"
import styles from "./project.module.css"
import Image from "next/image"

import keyboard from "@/public/projectImage/keyboard.png"
import devboard from "@/public/projectImage/devboard.png"



import Link from "next/link"



export default function Project(){
    return (
        <div>
            
            <h1 className={styles.heading}>Project</h1>

            <div className={styles.projectBG}>
                
                <aside className={styles.aside}>
                    <Image className={styles.imageName} src={keyboard} alt="Project A"></Image>  
                    <div className={styles.underProject}>
                        <h4>custom Keybaord</h4>
                        <Link href='https://github.com/AYUSH-pro-grammer/keyboard'>Link</Link>
                    </div>  



                </aside>

                <aside className={styles.aside}>
                    <Image className={styles.imageName} src={devboard} alt="Project B"></Image>


                    <div className={styles.underProject}>
                        <h4>Devboard</h4>
                        <Link href='https://github.com/AYUSH-pro-grammer/devboard'>Link</Link>
                    </div>  
                </aside>


                </div>


                <div className={styles.line}></div>

            <div className={styles.readmore}>
                <Link href="/project" className={styles.h4readmore}>View More</Link>
            </div>
        </div>

    )
}

