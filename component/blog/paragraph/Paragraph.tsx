'use client'
import { useEffect, useState } from "react"
import styles from "../heading/heading.module.css"

export default function Paragraph({data}: any){

    const [open, setOpen] = useState(false)
    const [newPara, setNewPara] = useState("")


    const change = async() => {
        if (!newPara){
            alert("Cant be Empty")
            return 
        }

    const url = `http://127.0.0.1:8000/blog/details/update/paragraph/${data.id}`

    try {
        const resp = await fetch(url, {
            method: "PUT",
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: newPara
            })
        })

    

        const respData = await resp.json()

        if (resp.ok){
            alert("Changed")
            setOpen(false)
        }
    } catch (e){
        alert(e)
    }
    } 



    const [deletePop, setDeletePop] = useState(false)
    const deletePara = async() => {
        const url = `http://127.0.0.1:8000/blog/details/delete/${data.id}`

        try{
            const resp = await fetch(url, {
                method:"DELETE",
                headers: {
                    "accept": "application/json"
                }
            })

            alert("Deleted")
            setDeletePop(false)
        } catch(e){
            alert(e)
        }

    }








    return(

        <div>

            {
                data.data.text? <p>{data.data.text}</p> :  "Write Para"
            }

            

            <button onClick={()=>{setOpen(!open)}} >Edit</button>
            <button onClick={()=>{setDeletePop(!deletePop)}}>Delete</button>

            {
                open ? <div className={styles.upperBoxCont} onClick={()=>{setOpen(false)}}>

                    <div className={styles.form} onClick={(e) => {
                        e.stopPropagation()
                    }}>

                        <input type="text" onChange={(e) => {setNewPara(e.target.value)}} />
                        <button onClick={change}>Change</button>

                    </div>




                </div>: null
            }





            {
                deletePop ? <div className={styles.upperBoxCont} onClick={()=>{setOpen(false)}}>

                    <div className={styles.form} onClick={(e) => {
                        e.stopPropagation
                    }}>

                        <p>Are You Sure</p>
                        <button onClick={deletePara}>Delete</button>


                    </div>


                </div>: null
            }


        </div>
    )
}