'use client'
import styles from "./editPage.module.css"
import { useState, useEffect } from "react"

import { useParams } from "next/navigation"

import Heading from "@/component/blog/heading/Heading"
import Paragraph from "@/component/blog/paragraph/Paragraph"
import { METHODS } from "http"
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation"
import { imageConfigDefault } from "next/dist/shared/lib/image-config"
import { posix } from "path"


export default function EditPage(){

    const params = useParams()
    const id = params.id;

    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [addBlock, setAddBlock] = useState(false)
    const [selected, SetSelected] = useState("")

    const datatype = {

        "heading" : {
            "text": "",
            "level": 1,
        },
        "paragraph" : {
            "text": ""
        },
        "image" : {
            "src": "",
            "alt": "",
            "caption": "",
            "width": ""
        },
        "gallery" :{
            "images": [],
            "layout": "grid"
        },
        "code":{
            "language": "",
            "code": "",

        },
        "table": {
            "headers": [],
            "rows": []
        },
        "quote": {"text":"", "author":""},
        "checklist": {
            "items": []
        },
        "ordered_list" : {"items": []},
        "unordered_list" : {"items": []},
        "youtube": {'url': ""},
        "divider": {"style": "", "width": ""},
        "timeline": {"items": []},
        "faq": {"items": []},
        "banner": {"title": "", "subtitle":"", "button_text":"", "button_link":"", "bg_color":""}

    }

    const DataBlockOptions = [
        "heading",
        "paragraph",
        "image",
        "gallery",
        "code",
        "table",
        "quote",
        "checklist",
        "ordered_list",
        "unordered_list",
        "youtube",
        "divider",
        "timeline",
        "faq",
        "banner",
    ]

    const togglePopupBlock = () => {
        setAddBlock(!addBlock);
    }

    useEffect(() => {
        const fetchData = async() => {
            const url = `http://127.0.0.1:8000/blog/details/${id}`

            try{

                const resp = await fetch(url,{
                    headers: {
                         'accept':'application/json'
                    }
                })

                if (resp.status == 200){
                    const Respdata = await resp.json()
                    setData(Respdata)
                } else {
                    alert(`${resp.status}`)
                }

            } catch (e){

                alert(e)

            }
        } 

        fetchData()
    }, [])

    
function updateBlockFeild(id: string, field: string, value:any){
    setData(prev => 
        prev.map(block => 
            block.id === id 
            ? {
                ...block, 
                data: {
                    ...block.data, 
                    [field]: value,
                },
            } 
            : block ))
}



function updateListItem(
    id: string,
    index: number,
    value: string
){

    setData(prev => prev.map(block => {

        if (block.id !== id) return block 

        const items = [...(block.data.items || [] )]
        items[index] = value 

        return {
            ...block,
            data: {
                ...block.data, 
                items,

            },
        }
        
    }))

}


function addListItems(id: str){
    setData(prev => prev.map(block => block.id === id ? {
        ...block,
        data: {
            ...block.data,
            items: [...(block.data.items || []), ""],
        },
    }: block))
}

function removeListItems(id: string, index: number){
    setData(prev => prev.map(block => {
        if (block.id !== id) return block 
        const items = [...(block.data.items || [])]
        items.splice(index, 1)

        return {
            ...block,
            data: {
                ...block.data,
                items,
            },
        }
    }))
}

function updateTableHeader(id: string, index: number, value: string){
    setData(prev => prev.map(block => {
        if (block.id !== id) return block 
        const headers = [...(block.data.headers || [])]

        headers[index] = value 
        return {
            ...block,
            data: {
                ...block.data,
                headers
            }
        }
    }))
}

function updateTableCell(
    id: string, 
    rowIndex: number,
    colIndex: number,
    value: string
) {
    setData(prev => prev.map(block => {
        if (block.id !== id) return block 
        const rows = [...(block.data.rows || [])]
        rows[rowIndex] = [...rows[rowIndex]]
        rows[rowIndex][colIndex] = value 
        return{
            ...block,
            data: {
                ...block.data,
                rows,

            }
        }
    }))
}

function addTableColumn(id: string){
    setData(prev => prev.map(block => {
        if (block.id !== id) return block 
        const headers = [...(block.data.headers || [])]
        const rows = (block.data.rows || []).map((row: string[]) => [...row, ""])
        headers.push(`Column ${headers.length + 1}`)

        return {
            ...block,
            data: {
                ...block.data,
                headers,
                rows,
            }
        }
    }))
}


function removeTableColumn(id: string){
    setData(prev => prev.map(block => {
        if (block.id !== id ) return block 
        const headers = [...(block.data.headers || [])]
        const rows = (block.data.rows || []).map((row: string[]) =>
            row.slice(0, -1)
        )
        headers.pop()
        return {
            ...block,
            data: {
                ...block.data,
                headers,
                rows,

            }
        } 
    }))
}

function addTableRow(id: string){
    setData(prev => prev.map(block => {
        if (block.id !== id) return block 
        const headers = block.data.headers || []
        const rows = [...(block.data.rows || [] )]
        rows.push(headers.map(() => ""))
        return {
            ...block,
            data: {
                ...block.data,
                rows,
            }
        }
    }))
}

function removeTableRow(id: string){
    setData(prev => prev.map(block => {
        if (block.id !== id) return block 
        const rows = [...(block.data.rows || [])]
        rows.pop()
        return {
            ...block,
            data: {
                ...block.data,
                rows,
            }
        }
    }))
}


function removeListItem(id: string, index: number){
    setData(prev => prev.map(block => {
        if (block.id !== id) return block 
        const items = [...(block.data.items || [])]
        items.splice(index, 1)
        return {
            ...block,
            data: {
                ...block.data,
                items,
            },
        }
    }))
}





const [imageSrc, setImageSrc] = useState("")
const [imageAlt, setImageAlt] = useState("")



    const [option, setOption] = useState("heading")

    const createBlock = async(e) => {
        e.preventDefault()

        const newBlock = {
            "type": option,
            "data": structuredClone(datatype[option])
        }

        const url = `http://127.0.0.1:8000/blog/details/add/${id}`

        try{
            const resp = await fetch(url,{
                method: "POST",
                headers: {
                    'accept': 'application/json',
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newBlock)
            }

            )

            const respData = await resp.json()
            alert("Added")
            setData([...data, respData])
        } catch (e) {
            alert(e)
        };

        alert(option)

    }

    function deleteBlock(id: string){
        setData(prev => prev.filter(block => block.id != id).map((block, i) => ({
            ...block,
            position: i
        })))
    }





    function moveBlock(id: string, direction: "up" | "down"){
        setData(prev => {
            const index = prev.findIndex(block => block.id === id)

            if (index == -1) return prev 
            
            const nextIndex = direction === "up" ? index - 1 : index + 1
            if (nextIndex < 0 || nextIndex >= prev.length) return prev 

            const copy = [...prev]
            const temp = copy[index]
            copy[index] = copy[nextIndex]
            copy[nextIndex] = temp 

            return copy.map((block, i ) => ({
                ...block,
                position: i
            }))
        })
    }




    const [saving, setSaving] = useState(false)

    const saveData = async() => {


        try{

            setSaving(true)

            const url = `http://127.0.0.1:8000/blog/details/replace/${id}`
            const payload = {
                blocks: data.map(item=>({
                    type:item.type,
                    data: item.data
                }))
            }



            const resp = await fetch(url,{
                method: "POST",
                headers:{
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            const resData = await resp.json()

            if (resp.ok){
                alert("Saved")
            } else{
                console.log(resData)
                alert("Failed")
            } 


        } catch(e){
            alert(e)
        } finally {
            setSaving(false)
        }
    }







    function renderBlock(item: any){
        switch (item.type){
            case "heading":
                return selected === item.id ? (
                    <h1 
                    contentEditable
                    suppressContentEditableWarning
                    
                    onBlur = {(e) => {
                        updateBlockFeild(
                            item.id,
                            "text",
                            e.currentTarget.textContent || ""
                        )

                        SetSelected("")
                    }}
                    
                    className={styles.editableHeading}>

                        {item.data.text}

                    </h1>
                ):(
                    <h1
                    onDoubleClick={()=>SetSelected(item.id)}
                    className={styles.heading}>

                        {item.data.text}

                    </h1>
                )

            case "paragraph":
                return selected === item.id ? (
                    <p
                    contentEditable
                    suppressContentEditableWarning

                    onBlur={(e) => {
                        updateBlockFeild(
                            item.id,
                            "text",
                            e.currentTarget.innerText
                        )

                        SetSelected("")
                    }}

                    className={styles.editableParagraph}
                    
                    >
                        {item.data.text}
                    </p>
                ):(
                    <p onDoubleClick={()=> SetSelected(item.id)}
                    className={styles.paragraph}
                    >

                        {item.data.text}

                    </p>
                )


            case "image":
                return (
                    <div className={styles.imageBlock}>
                        <img src={item.data.src} alt={item.data.alt} className={styles.imageData} />

                        {
                            selected === item.id ? (
                                <div className={styles.inlineForm}>

                                    <input type="text" value={item.data.src} onChange={(e) => updateBlockFeild(item.id, "src", e.target.value)} placeholder="Image URL" />
                                    <input type="text" value={item.data.alt} onChange={(e) => updateBlockFeild(item.id, "alt", e.target.value)} placeholder="Alt Text" />

                                </div>
                            ):(
                                <button onDoubleClick={()=>SetSelected(item.id)}> Double click to edit image</button>
                            )
                        }
                    </div>
                )


             case "gallery":
                return (
                    <div className={styles.galleryBlock}>
                        <div className={styles.galleryGrid}>
                            {(item.data.images || []).map((img: any, i: number) => (

                                <img

                                    key={i}
                                    src={img.src}
                                    alt={img.alt || `gallery-${i}`}
                                    className={styles.galleryImage}
                                
                                />

                            ))}

                            {
                                selected === item.id && (
                                    <div className={styles.inlineForm}></div>
                                )
                            }
                        </div>
                    </div>
                )

            default: 
                return (
                    <div className={styles.unsupportedBlock}>Unsupported Block: {item.type}</div>
                )
        }
    }




    return (
        <div className={styles.cont}>

            <aside className={styles.editPage}>
                <h2>Edit Page</h2>

                <div onClick={togglePopupBlock}>
                    Add New Components
                </div>

                <br /><br />

                {
                    addBlock ? <div className={styles.popUpCont} onClick={togglePopupBlock}>


                        <div className={styles.popUpData} onClick={(e)=>{e.stopPropagation()}}>
                            Add Item

                            <form action="">
                                <label htmlFor="">Type</label>
                                <select name="" id="" value={option} onChange={(e) => setOption(e.target.value)}>
                                    {
                                        DataBlockOptions.map((item) => {
                                            return(
                                                <option key={item} value={item}>{item}</option>
                                            )
                                        })
                                    }
                                </select>

                                <button onClick={createBlock}>Create</button>
                            </form>
                        </div>



                    </div>: null
                }

                <div className={styles.addButton}>
                    <button>Heading</button>
                    <button>SubHeading</button>
                    <button>Paragraph</button>
                    <button>Image</button>
                    <button>Gallery</button>
                    <button>Code</button>
                    <button>Table</button>
                    <button>Quote</button>
                    <button>Checklist</button>
                    <button>Ordered List</button>
                    <button>UnOrdered List</button>
                    <button>youtube</button>
                    <button>divider</button>
                    <button>timeline</button>
                    <button>faq</button>
                    <button>banner</button>
                </div>
            </aside>
           



           <aside className={styles.otherAside}>

            <br />
            <button onClick={saveData}>{saving ? "Saving..." : "Save"}</button>
            <br />

            {
                data.map((item) => (
                    <div key={item.id} className={styles.blockWrap}>

                        <div className={styles.blockToolbar}>
                            <button type="button" onClick={()=>moveBlock(item.id, "up")} disabled={data.findIndex((b) => b.id === item.id ) === 0}> ↑ </button>
                            <button type="button" onClick={()=>moveBlock(item.id, "down")} disabled={data.findIndex((b) => b.id === item.id ) === data.length - 1}> ↓ </button>

                            <button type="button" onClick={()=>SetSelected(item.id)}> Edit</button>
                            <button type="button" onClick={()=> deleteBlock(item.id)}>Delete</button>

                          

                        </div>


                          <div 
                                onClick={()=> SetSelected(item.id)}
                            className={styles.blockContent} >

                                {renderBlock(item)}
                            
                            </div>

                    </div>
                ))
            }

           </aside>

            
        </div>
    )
}