// TODO: add latlong firebase requestion function and leaflet route creation function, add pointers for all firebase data, getDistance()
import { useState } from "react"
import createRoutineMachineLayer from "../LeafletMap/CreateLeafletRoute"

const CreateLeafletRouting = () => {

    let x1 = 43.777702
    let y1 = -79.233238
    let x2 = 44.777702
    let y2 = -79.233238

    const [coords, setCoords] = useState([[x1, y1],[x2, y2]])

    return 
    <>

    </>
}

export default CreateLeafletRouting