import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import CreateLeafletRouting from "../CreateLeafletRouting/CreateLeafletRouting";

// thx bro https://stackoverflow.com/questions/67658340/how-to-use-leaflet-routing-machine-with-react-leaflet-3
const createRoutineMachineLayer = ({x1, y1, x2, y2}) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(43.777702, -79.233238),
      L.latLng(44.777702, -79.233238)
    ],
  });

  return instance;
};

const CreateLeafletRoute = createControlComponent(createRoutineMachineLayer);

export default CreateLeafletRoute;