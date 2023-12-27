import React, { useEffect, useState } from 'react'

const useSuggestions = (searchText) => {
    if(searchText.length < 1){
       return
    }
    const [suggestions, setSuggestions] = useState("")

    useEffect(() => {
        const debouncing = setTimeout(()=>{
            if(searchText){
                getSuggestions()
            }
        },500)
        return()=>{
            clearTimeout(debouncing)
        }
    }, [searchText])

    async function getSuggestions() {
        const data = await fetch(`https://completion.amazon.com/api/2017/suggestions?limit=11&prefix=${searchText}&suggestion-type=KEYWORD&alias=aps&wc=&plain-mid=1&client-info=amazon-search-ui`)
        const suggestion = await data.json()
        console.log(suggestion)
        setSuggestions(suggestion)
    }
    return suggestions
}

export default useSuggestions