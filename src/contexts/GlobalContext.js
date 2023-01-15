import { useState, createContext } from "react"
import CreateLeafletRoute from "../LeafletMap/CreateLeafletRoute"

const GlobalContext = () => {

    const [coords, setCoords] = useState([[43.777702, -79.233238],[44.777702, -79.233238]])
    // const coordsList = [[x1, y1],[x2, y2]]

    const CoordsListContext = createContext();

    return <>
        <CoordsListContext.Provider value={{
            coords,
            setCoords
        }}>
        </CoordsListContext.Provider>
    </>
}

export default GlobalContext