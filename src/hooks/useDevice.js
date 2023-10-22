import { useEffect, useState } from "react"


const useDevice = ()=>{
    const [device,setDevice]=useState("small")
    const handleSize = (e)=>{
        console.log(window.innerWidth)
        if(window.innerWidth>300 && window.innerWidth<600){
            setDevice("small")
        }else if(window.innerWidth>300 && window.innerWidth<600){
            setDevice("medium")
        }else{
            setDevice("large")
        }
    }
    useEffect(()=>{
        window.addEventListener("resize",handleSize)
       
        return()=>{
            window.removeEventListener("resize",handleSize)
        }
    })

    return device
}

export default useDevice