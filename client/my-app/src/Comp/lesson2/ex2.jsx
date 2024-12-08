import Str from "./Str"

const { useState } = require("react")

const Ex2=()=>{
    const [str1,setStr1]=useState("")
    const [str2,setStr2]=useState("")

    return(
        <>
        <button onClick={()=>{setStr1("Happy ")}}>one</button>
        <Str str={str1}/>

        <button onClick={()=>{setStr2("New Year")}}>tow</button>
        <Str str={str2}/>

        </>
    )
}
export default Ex2