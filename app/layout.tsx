'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/component/navbar/Navbar";
import styles from "./page.module.css"

import Footer from "@/component/footer/Footer";
import "./globals.css";

import { usePathname } from "next/navigation";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  const isBlog = pathname.startsWith("/blog/")
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >

      {
        isBlog ? 

              <body>

        <div>
        {children}
        </div>
        
        </body>
        
        
        
        :


              <body className={styles.pageLAYOUT} >

        <Navbar no={0}></Navbar>

        <div className={styles.childern}>
        {children}

        <Footer/>

        </div>
        
        </body>
      }
    
    </html>
  );
}
