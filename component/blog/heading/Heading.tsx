"use client"
import { useState, useEffect } from "react"

import styles from "./heading.module.css"
import { METHODS } from "http"







export default function Heading({data}: any){

    const [open, setOpen] = useState(false)

    const [newTitle, setNewTitle] = useState("")






    const alertMe = () => {
        console.log("data:, ",data)
        alert(data.data.text)
    }
    const change = async() => {

        if (!newTitle){
            alert("Cant be Empty")
            return
        }

        const url = `http://127.0.0.1:8000/blog/details/update/heading/${data.id}`
        
        try{


            const resp = await fetch(url, {
                method: "PUT",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    text: newTitle,
                    level: 1
                })

            })



            const respData = await resp.json()

            if (respData.id){
                alert("Changed")
                setOpen(false)
            } 


        } catch (e){
            alert(e)
        }



    }

    const [deletePop, setDeletePop] = useState(false)

    const deleteHeading = async() => {
        const url = `http://127.0.0.1:8000/blog/details/delete/${data.id}`


        try{

                    const resp = await fetch(url, {
            method: "DELETE",
            headers: {
                "accept": "application/json"
            }

        })

        alert("Deleted")
        setDeletePop(false)




        } catch (e){
            alert(e)
        }

    }


    return(            
        <div className={styles.cont}>
           <h1>{data.data.text}</h1>
           <button onClick={()=>{setOpen(!open)}}>edit</button>
           <button onClick={()=>{setDeletePop(!deletePop)}} >Delete</button>

           {
            open ? <div className={styles.upperBoxCont} onClick={()=>{setOpen(false)}}>


<div className={styles.form} onClick={(e) => {
    e.stopPropagation()
}}>

    <input type="text" onChange={(e) => {setNewTitle(e.target.value)}}/>
    <button onClick={change}>Change</button>

</div>
            </div> : null
           }



                      {
            deletePop ? <div className={styles.upperBoxCont} onClick={()=>{setOpen(false)}}>


<div className={styles.form} onClick={(e) => {
    e.stopPropagation()
}}>

    <p>Are You Sure??</p>
    <button onClick={deleteHeading}>Delete</button>

</div>
            </div> : null
           }

        </div>
    )
}