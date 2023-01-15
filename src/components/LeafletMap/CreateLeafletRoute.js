import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useContext } from "react"

// thx bro https://stackoverflow.com/questions/67658340/how-to-use-leaflet-routing-machine-with-react-leaflet-3
const CreateRoutineMachineLayer = () => {

  // const coordsList = useContext(CoordsListContext);

  // const latLngs = coordsList.map((coord) => L.latLng(coord[0], coord[1]));

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(44.677702, -79.233238),
      L.latLng(44.777702, -79.233238)
    ],
    show: null
  });

  // instance.setOptions({ show: false });
  // instance.hide()

  return instance;
};

export const CreateLeafletRoute = createControlComponent(CreateRoutineMachineLayer);

// thx bro https://stackoverflow.com/questions/67658340/how-to-use-leaflet-routing-machine-with-react-leaflet-3
const CreateRoutineMachineLayer2 = () => {

  // const coordsList = useContext(CoordsListContext);

  // const latLngs = coordsList.map((coord) => L.latLng(coord[0], coord[1]));

  const options = {
    show: false,
    waypoints: [
      L.latLng(44.577702, -79.233238),
      L.latLng(44.727702, -79.233238)
    ],
    summaryTemplate: "'<h5>{name}</h5><h5>{distance}, {time}</h5>'"
  }

  const instance = L.Routing.control(options);

  // instance.setOptions({ show: false });

  // instance.hide()

  return instance;
};

export const CreateLeafletRoute2 = createControlComponent(CreateRoutineMachineLayer2);