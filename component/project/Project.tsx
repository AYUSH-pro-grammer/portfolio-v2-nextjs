"use client"
import styles from "./project.module.css"
import Image from "next/image"
import projecta from "@/public/projectImage/imgA.png"
import projectb from "@/public/projectImage/imgB.png"
import Link from "next/link"



export default function Project(){
    return (
        <div>
            
            <h1 className={styles.heading}>Project</h1>

            <div className={styles.projectBG}>
                
                <aside className={styles.aside}>
                    <Image className={styles.imageName} src={projecta} alt="Project A"></Image>  
                    <div className={styles.underProject}>
                        <h4>Title One</h4>
                        <Link href='/'>Link</Link>
                    </div>  



                </aside>

                <aside className={styles.aside}>
                    <Image className={styles.imageName} src={projectb} alt="Project B"></Image>


                    <div className={styles.underProject}>
                        <h4>Title Two</h4>
                        <Link href='/'>Link</Link>
                    </div>  
                </aside>


                </div>


                <div className={styles.line}></div>

            <div className={styles.readmore}>
                <h4 className={styles.h4readmore}>View More</h4>
            </div>
        </div>

    )
}

