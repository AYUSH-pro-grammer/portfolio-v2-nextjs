'use client'
import styles from './contact.module.css'

import arrowANi from '../../assets/json/newarror.json'
import { useRef } from 'react';

export default function ContactPage() {
  return (
    <div className={styles.contactPageOverview}>

      <div className={styles.contactPageCont}>
        <h1 className={styles.contactPageTtittle}>Let's Connect!</h1>

        <div className={styles.paddingLin}></div>
        <div className={styles.paddingLin}></div>

        <div className={styles.contactForm}>
          <h1 className={styles.GetinTouchL}>Get in touch</h1>

          <br /><br />

          <form
            action="https://formsubmit.co/ayushpro1428@gmail.com"
            className={styles.formFotyn}
            method="POST"
          >

            <div className={styles.upparLimitBox}>

              <div className={styles.boxForEmailIP}>
                <label className={styles.lalbelOnC}>Full Name</label>
                <br />

                <input
                  type="text"
                  className={styles.typeInputFor}
                  placeholder="Ayush"
                  required
                  name="name"
                />
              </div>

              <div className={styles.boxForEmailIP}>
                <label className={styles.lalbelOnC}>Email</label>
                <br />

                <input
                  type="email"
                  className={styles.typeInputFor}
                  required
                  name="email"
                  placeholder="me@email.com"
                />
              </div>

            </div>

            <div className={styles.gapBeforeMsg}></div>

            <div className={styles.lowerLimitMag}>
              <label>Your Message</label>
              <br />

              <textarea
                className={styles.typeInputForF}
                name="w3review"
                placeholder="Type something here..."
              />
            </div>

            <div className={styles.paddingLin}></div>

            <button className={styles.buttonHereFOru} type="submit">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}