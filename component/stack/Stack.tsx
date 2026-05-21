import styles from "./stack.module.css"

import react from "@/public/teachy/react.svg"
import python from "@/public/teachy/python.svg"
import django from "@/public/teachy/django.svg"
import figma from "@/public/teachy/figma.svg"
import postgress from "@/public/teachy/sql.svg"
import pandas from "@/public/teachy/pandas.svg"

import Image from "next/image"
import Link from "next/link"

export default function Stack(){
    return (

        <div>

<br />
            <h1 className={styles.stackHeading}>Stack</h1>

            <div className={styles.stackCont}>


                <aside className={styles.asideBox}>

                    <div className={styles.imageCont}>
                    <Image src={react} alt="react"></Image>
                    </div>
                    <h4>React</h4>
                    
                </aside>


                <aside className={styles.asideBox}>

                    <div className={styles.imageCont}>
                    <Image src={python} alt="react"></Image>
                    </div>
                    <h4>Python</h4>
                    
                </aside>

                <aside className={styles.asideBox}>

                    <div className={styles.imageCont}>
                    <Image src={django} alt="react"></Image>
                    </div>
                    <h4>Django</h4>
                    
                </aside>

                <aside className={styles.asideBox}>

                    <div className={styles.imageCont}>
                    <Image src={figma} alt="react"></Image>
                    </div>
                    <h4>Figma</h4>
                    
                </aside>

                <aside className={styles.asideBox}>

                    <div className={styles.imageCont}>
                    <Image src={postgress} alt="react"></Image>
                    </div>
                    <h4>PostgreSQL</h4>
                    
                </aside>

                <aside className={styles.asideBox}>

                    <div className={styles.imageCont}>
                    <Image src={pandas} alt="react"></Image>
                    </div>
                    <h4>Pandas</h4>
                    
                </aside>



            </div>


<div>
    
</div>

                <div className={styles.viewmore}>
            <Link href="/stack" className={styles.viewmoreLink} >View More</Link>
            </div>


            
            

        </div>

    )
}