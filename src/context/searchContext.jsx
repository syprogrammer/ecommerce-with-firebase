import {createContext , useState} from 'react'

export const searchContext = createContext()

export const SearchContextProvider = ({children})=>{
  const [showSearch,setShowSearch] = useState(true)

  const openSearchBar = ()=>setShowSearch(true)
  const closeSearchBar = ()=>setShowSearch(false)

  return (
    <searchContext.Provider 
    value={{showSearch,openSearchBar,closeSearchBar}}
    >
        {children}
    </searchContext.Provider>
  )
}