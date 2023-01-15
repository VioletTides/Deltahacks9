import { React } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import { AuthProvider } from "./pages/AuthContext";
// import { AuthProvider } from "./pages/AuthContext";

function App() {
  return(
    <AuthProvider>
      <Signup />
    </AuthProvider>
  )
}

export default App;