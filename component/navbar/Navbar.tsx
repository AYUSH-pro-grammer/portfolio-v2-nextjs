'use client';
import styles from "./Navbar.module.css"
import Lottie, {type LottieRefCurrentProps} from "lottie-react"
import { useState, useRef, useEffect} from "react";

import nav from "@/assets/json/nav.json"
import arrowNav from "@/assets/json/arrowNav.json"
import Scan from "@/assets/json/Scan.json"

import Link from "next/link";


interface NavbarProps{
    no: number
}

export default function Navbar({no}: NavbarProps){

    const lottieref1 = useRef<LottieRefCurrentProps | null>(null);
    const lottieref2 = useRef<LottieRefCurrentProps | null>(null);
    const lottieref3 = useRef<LottieRefCurrentProps | null>(null);
    const lottieref4 = useRef<LottieRefCurrentProps | null>(null);
    const userIconRef = useRef<LottieRefCurrentProps | null>(null);

    const [active, set_active] = useState(0);

    function changeActive(no: number){
        set_active(no)
    }


    return (
        <div className={styles.NavbarcONT}> 
            
            <div className={styles.OneMore}>


<div>


                <div className={styles.upperbodyName}>

                    <div
                    
                    onMouseEnter={()=>{userIconRef.current?.play()}}
                    onMouseLeave={()=>{userIconRef.current?.stop()}}
                    className={styles.navbarScan}
                    >

                    <Lottie

                    lottieRef={userIconRef}
                    animationData={Scan}
                    loop={false}
                    autoplay={false}
                    className={styles.lottieScan}
                    
                    
                    >

                    </Lottie>

                    </div>


                    <div className={styles.upperbodyNametEXT}>
                         <h4>Ayush Kumar</h4>
                        <h6>Software Dev</h6>
                    </div>
                   
                </div>


<br />

                <ul className={styles.uperlowerNav}>
                    <Link href="/" onClick={()=>{changeActive(0)}}
                    
                    className={active === 0 ? styles.active : styles.notActive}
                        
                        >Home

                        {active === 0 ? (
                        <div className={styles.dot}>·</div>

                        ):(
                            <p className={styles.none}></p>
                        )}

                        
                        
                        </Link>
                    <Link href="/about" onClick={()=>{changeActive(1)}}
                    className={active === 1 ? styles.active : styles.notActive}
                        >About
                        
                        {active === 1 ? (
                        <div className={styles.dot}>·</div>

                        ):(
                            <p className={styles.none}></p>
                        )}
                        
                        </Link>
                    <Link href="/project" onClick={()=>{changeActive(2)}}
                    className={active === 2 ? styles.active : styles.notActive}
                        >Project
                        
                        {active === 2 ? (
                        <div className={styles.dot}>·</div>

                        ):(
                            <p className={styles.none}></p>
                        )}
                        
                        </Link>
                    <Link href="/stack" onClick={()=>{changeActive(3)}}
                    className={active === 3 ? styles.active : styles.notActive}
                        >Stack
                        
                        {active === 3 ? (
                        <div className={styles.dot}>·</div>

                        ):(
                            <p className={styles.none}></p>
                        )}
                        
                        </Link>
                    <Link href="/contact" onClick={()=>{changeActive(4)}}
                    className={active === 4 ? styles.active : styles.notActive}
                        >Contact
                        
                        {active === 4 ? (
                        <div className={styles.dot}>·</div>

                        ):(
                            <p className={styles.none}></p>
                        )}
                        
                        </Link>





              <Link href="/blog" onClick={()=>{changeActive(5)}}
                    className={active === 5 ? styles.active : styles.notActive}
                        >Blog
                        
                        {active === 5 ? (
                        <div className={styles.dot}>·</div>

                        ):(
                            <p className={styles.none}></p>
                        )}
                        
                        </Link>
                </ul>



</div>



    <ul className={styles.lowerMainPart}>

        <a href="mailto:ayushpro1428@gmail.com">

   <li
        
        
                      onMouseEnter={()=>{lottieref1.current?.play()}}
                      onMouseLeave={()=>{lottieref1.current?.stop()}}

>

    <h6>Email</h6>

            <div className={styles.lowerScaleChange}
            >
                <Lottie

                lottieRef={lottieref1}
                animationData={arrowNav}
                loop={true}      
                className={styles.littieBounseArrow}
                autoplay={false}
                >
                    
                </Lottie>


            </div>
        </li>


        </a>


        <a href="https://github.com/AYUSH-pro-grammer">

              <li
        
                      onMouseEnter={()=>{lottieref2.current?.play()}}
                      onMouseLeave={()=>{lottieref2.current?.stop()}}

>
                        <h6>Github</h6>

            <div className={styles.lowerScaleChange}
            

>
                <Lottie

                lottieRef={lottieref2}
                animationData={arrowNav}
                loop={true}      
                className={styles.littieBounseArrow}
                autoplay={false}

                >
                    
                </Lottie>

                
            </div>

        </li>


        </a>
     

     <a href="https://www.linkedin.com/in/ayushpro1428/">
             <li
        
                      onMouseEnter={()=>{lottieref3.current?.play()}}
                      onMouseLeave={()=>{lottieref3.current?.stop()}}

>
                        <h6>Linkedin</h6>

            <div className={styles.lowerScaleChange}
            
                    
                    >
                <Lottie
                lottieRef={lottieref3}
                animationData={arrowNav}
                loop={true}      
                className={styles.littieBounseArrow}
                autoplay={false}

                >
                    
                </Lottie>

                
            </div>
        </li></a>
  

    </ul>









            </div>
        </div>
    )
}