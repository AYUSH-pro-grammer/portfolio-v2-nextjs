'use client'
import { useState, useEffect } from "react"
import styles from "./Blog.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Blog(){

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const redirect = (id: string) => {
        router.push(`./blog/${id}`)
    }

    useEffect(() => {

        const fetchData = async() => {
            const backendUrl = "https://portfolio-backend-woad-seven.vercel.app/blog/get"

            try{
                const resp = await fetch(backendUrl,{
                    headers:{
                        "accept": "application/json"
                    }
                })
                const dataResp = await resp.json()
                setData(dataResp)
            } catch (e) {
                alert(`Error ${e}`)
            }
        }

        setLoading(true)
        fetchData()
        setLoading(false)


    }, [])

    if (loading){
        return (
            <div>Loading...</div>
        )
    }

    return(

        <div>

            <h1>Blog Page</h1>


  <div className={styles.cont}>


            {
                data.map((item) => {
                    return(

                        <div className={styles.cards} onClick={()=>{redirect(item.id)}}>
                            <img src={item.image} alt="" />

                            <h4>{item.title}</h4>
                            <h4>{item.description}</h4>
                        </div>
                    )
                })
            }




        </div>
        </div>
      
    )
}

