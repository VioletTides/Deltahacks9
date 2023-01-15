import { React } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Inventory from "./pages/Inventory";
import { AuthProvider } from "./pages/AuthContext";
// import { AuthProvider } from "./pages/AuthContext";
import LeafletMap from "./components/LeafletMap/LeafletMap";

function App() {
  return(
    <AuthProvider>
      {/* <Signup /> */}
      <Inventory />
    </AuthProvider>
  )
}

export default App;