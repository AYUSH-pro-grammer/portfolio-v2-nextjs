'use client'
import Stack from "@/component/stack/Stack"
import Contact from "@/component/contact/Contact"
import styles from "./stack.module.css"

import arch from "@/public/teachy/arch.svg"
import css from "@/public/teachy/css.svg"
import django from "@/public/teachy/django.svg"
import fasapi from "@/public/teachy/fastapi.png"
import figma from "@/public/teachy/figma.svg"
import github from "@/public/teachy/github.svg"
import html from "@/public/teachy/html.svg"
import js from "@/public/teachy/js.svg"
import matplotlib from "@/public/teachy/matplotlib.svg"
import numpy from "@/public/teachy/numpy.svg"
import pandas from "@/public/teachy/pandas.svg"
import python from "@/public/teachy/python.svg"
import react from "@/public/teachy/react.svg"
import sql from "@/public/teachy/sql.svg"
import vs from "@/public/teachy/vs.svg"

import Image from "next/image"


export default function Stach(){

    const data = [
  {
    "title": "Web Development",
    "data": [
      {
        "image": html,
        "name": "HTML5",
        "desp": "Foundation of all structured content on the web. Clean, semantic, and SEO-friendly markup."
      },
      {
        "image": css,
        "name": "CSS3",
        "desp": "Handles the styling, layout, and responsiveness of my interfaces."
      },
      {
        "image": js,
        "name": "JavaScript (ES6+)",
        "desp": "Main scripting language of the web. Powers interactivity and logic on the frontend."
      },
      {
        "image": react,
        "name": "React",
        "desp": "A powerful frontend library used to build dynamic, component-based user interfaces."
      },

{
"image": html,
"name": "Next JS",
"desp": "addon"
},

      {
        "image": python,
        "name": "Python",
        "desp": "Backend and scripting language Also used for data-related tools and automation."
      },
      {
        "image": sql,
        "name": "PostgreSQL", 
        "desp": "Robust and scalable SQL database system used in my full-stack applications."
      }
    ]
  },

  {
    "title": "Backend & APIs",
    "data": [
         {
        "image": fasapi,
        "name": "FastAPI",
        "desp": "High-performance Python framework for building APIs quickly. Ideal for backend logic and REST APIs."
      },

      {
        "image": django,
        "name": "Django",
        "desp": "A popular full-stack Python web framework."
      }
    
    ]
  },

    {
    "title": "Design & Prototyping",
    "data": [
         {
        "image": figma,
        "name": "Figma",
        "desp": "My primary tool for designing UI, wireframes, and prototypes. Design-to-code ready."

      }
    
    ]
  },

  {
    "title": "Development Tools",
    "data": [
         {
        "image": vs,
        "name": "VS Code",
        "desp": "My go-to code editor with powerful extensions and integrations."
      },

       {
        "image": arch,
        "name": "Linux (Arch)",
        "desp": "Personal development environment, used for scripting, CLI work, and Python projects."
      }
    
    ]
  },

  {
    "title": "Data & Visualization",
    "data": [
         {
        "image": numpy,
        "name": "Numpy",
        "desp": "Library for numerical computing in Python."
      },

       {
        "image": pandas,
        "name": "Pandas",
        "desp": "Library for data wrangling and analysis."
      },
      {
        "image": matplotlib,
        "name": "matplotlib",
        "desp": "Library for creating basic data visualizations."
      }
      


    
    ]
  }


]
    return(
        <div>

            <h1 className={styles.heading}>Stack</h1>

            <div className={styles.stackCont}>

                {
                    data.map((item:any) => {
                        return(
                            <div>

                <h2 className={styles.secondTitle}>{item.title}</h2>

                                <div className={styles.underCont}>

                        
   {
                            item.data.map((card:any) => {
                                return(
                                    <aside className={styles.asideCont}>

                                        <div className={styles.iconAndName}>

                                        <div className={styles.imageContIcon}>
                                        <Image src={card.image} className={styles.imageIcon} alt="html"></Image>
                                        </div>

                                        <h4 className={styles.name} >{card.name}</h4>
                                        </div>

                                   
                                        <p className={styles.cardDesp} >{card.desp}</p>
                                    </aside>
                                )
                            })
                        }
                    



                </div>
                    <div className={styles.line}></div>

                     


                            </div>
                        )
                    })
                }


            </div>

        
            <Contact/>

        </div>
    )
}