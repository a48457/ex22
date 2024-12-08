import { useEffect, useState } from "react"

const Ex5=()=>{
    useEffect(()=>{alert("welcom")},[])
    const [str,setStr]=useState("")
    return( 
        <>
        <input onChange={(e) => setStr(e.target.value)} />
        <button onClick={()=>{alert(str)}}>show</button>
        </>
    )
}
export default Ex5