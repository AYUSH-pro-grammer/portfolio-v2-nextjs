

import styles from "./contact.module.css"
import contact from "@/assets/json/contactCat.json"
import Lottie from "lottie-react"
import Link from "next/link"

export default function Contact(){
    return (
        <div>
            <h1 className={styles.heading}>Contact Section</h1>

            <div className={styles.white}>

                 <div className={styles.whiteBox}>

                <p>Do you have a project idea you'd
                    <br />
                    like to discuss?</p>
                <Link href="/contact" className={styles.button}>Contact Me</Link>

            </div> 

            <div className={styles.lottieCont}>
                <Lottie
                
                animationData={contact}>

                </Lottie>
            </div>

            </div>

           


        </div>
    )
}