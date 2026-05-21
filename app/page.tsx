'use client'
import Image from "next/image";
import Navbar from "@/component/navbar/Navbar";
import Lottie from "lottie-react";

import About from "@/component/about/About";
import hello from "@/assets/json/hello.json"
import greenDot from "@/assets/json/greendot.json"
import Stack from "@/component/stack/Stack";
import Contact from "@/component/contact/Contact";
import Footer from "@/component/footer/Footer";
import styles from "./page.module.css"

import { useRef } from "react";
import ProjectPage from "@/component/project/Project";

export default function Home() {

  const helloref = useRef(null);
  const greenDotref = useRef(null);

  return (
    <div>
      
      <div className={styles.upperBar}>

        <div className={styles.helloCont}>
            <h2>Hey,</h2>
        <Lottie

        lottieRef={helloref}
        animationData={hello}
        className={styles.helloIcon}

        >

        </Lottie>
        <h2>I'm Ayush!</h2>

        </div>

        <div className={styles.lottieGreenSection}>



          <Lottie
          lottieRef={greenDotref}
          animationData={greenDot}
          className={styles.greendot}
          >




          </Lottie>




          <p>Working on something</p>

          <button className={styles.button}>Contact Me</button>

        </div>
      
      </div>

      <p className={styles.basedinIndia}>📍 Based in India</p>

      <About/>
      <ProjectPage/>
      <Stack/>
      <Contact/>







    </div>
  );
}

