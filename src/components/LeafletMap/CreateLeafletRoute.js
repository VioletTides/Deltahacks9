import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalState";
// import "./leaflet_support.css"

// thx bro https://stackoverflow.com/questions/67658340/how-to-use-leaflet-routing-machine-with-react-leaflet-3
const CreateRoutineMachineLayer = (props) => {

  // const globals = useContext(GlobalContext);
  const {coords} = props;
  const latLngs = coords.map((coord) => L.latLng(coord[0], coord[1]));

  console.log("latLngs")
  console.log(latLngs)

  // console.log("globals.currentCoords")
  // console.log(globals.currentCoords)

  const instance = L.Routing.control({
    // waypoints: [
    //   L.latLng(44.677702, -79.233238),
    //   L.latLng(44.777702, -79.233238)
    // ],
    show: false,
    draggableWaypoints: false,
    waypoints: latLngs
  });

  return instance;
};

export const CreateLeafletRoute = createControlComponent(CreateRoutineMachineLayer);