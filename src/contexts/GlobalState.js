import { useState, createContext } from "react"

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [coords, setCoords] = useState([
        [[43.777702, -78.233238],[44.777702, -77.233238]],
        [[43.777702, -79.233238],[44.777702, -79.233238]]
    ])

    function addCoords(someCoords){
        setCoords([...coords, someCoords])
    }

    return <GlobalContext.Provider value={{
            coords,
            setCoords,
            addCoords,
        }}> {children} </GlobalContext.Provider>
}