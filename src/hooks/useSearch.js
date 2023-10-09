import {useState,useEffect} from 'react'

const useFetch= (url)=>{
    const [data , setData]= useState(null)
    useEffect(()=>{

    },[])

    async function getData(){
        const data = await fetch(url);
        const json = await data.json()
        setData(json)
    }

    return data

}