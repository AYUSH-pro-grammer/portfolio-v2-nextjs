

import styles from "./contact.module.css"
import contact from "@/assets/json/contactCat.json"
import Lottie from "lottie-react"

export default function Contact(){
    return (
        <div>
            <h1 className={styles.heading}>Contact Section</h1>

            <div className={styles.white}>

                 <div className={styles.whiteBox}>

                <p>Do you have a project idea you'd
                    <br />
                    like to discuss?</p>
                <button className={styles.button}>Contact Me</button>

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