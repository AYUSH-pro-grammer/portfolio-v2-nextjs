
import styles from "./about.module.css"

import one from '@/public/icon/one.svg'
import two from '@/public/icon/two.svg'
import three from '@/public/icon/three.svg'
import four from '@/public/icon/four.svg'
import Image from "next/image"

import Link from 'next/link'



const About = () => {
  return (
    <div className={styles.aboutPageCont}>

      <h1 className={styles.aboutUsTitle}>About Me</h1>




      <div className={styles.aboutUsCont}>


<div className={styles.part1from}>


          <div className={styles.aboutUsSection}>
<Image src={one} alt=""  className={styles.svgImageABout}/>

 <h3 className={styles.aboutMeheadingT} >Academic Education</h3>
    <div className={styles.aboutusDOTcombi}>
            <h1 className={styles.aboutusDot}>•</h1>
            <p className={styles.abutMePraatT} >

                          

Newton School of Technology – B.Tech CSE
<br />
<br />
2025 – Present


            </p>

    </div>
          </div>


          <div className={styles.aboutUsSection}>
<Image src={two} alt=""  className={styles.svgImageABout}/>

 <h3 className={styles.aboutMeheadingT} >Non-Formal Education</h3>
    <div className={styles.aboutusDOTcombi}>
            <h1 className={styles.aboutusDot}>•</h1>
            <p className={styles.abutMePraatT} >

Udemy Python Program - Coding Certification Program

<br /><br />

March – June 2023


            </p>

    </div>
          </div>
</div>


<div className={`${styles.part1from} ${styles.part1fromn}`}>

          <div className={styles.aboutUsSection}>
<Image src={three} alt=""  className={styles.svgImageABout}/>

 <h3 className={styles.aboutMeheadingT} > Experience</h3>
    <div className={styles.aboutusDOTcombi}>
            <h1 className={styles.aboutusDot}>•</h1>
            <p className={styles.abutMePraatT} >

                          

Currently in progress

            </p>

    </div>
          </div>


          <div className={styles.aboutUsSection}>
<Image src={four} alt=""  className={styles.svgImageABout}/>

 <h3 className={styles.aboutMeheadingT} >Certifications</h3>
    <div className={styles.aboutusDOTcombi}>
            <h1 className={styles.aboutusDot}>•</h1>
            <p className={styles.abutMePraatT} >

NST DSA Hackathon
<br /><br />
22 July 2024


            </p>

    </div>
          </div>
</div>


<div className={styles.gapgoeshere}></div>


<Link href='/about' className={styles.viewMoreBoxY}>


<div className={styles.viewMoreBox}>
        <h1 className={styles.viewMoreBoxTtitle}>View More</h1>
</div>

</Link>






<div className={styles.gapgoeshere}></div>


      </div>




    </div>
  )
}

export default About
