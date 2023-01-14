import { React } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
  )
}

export default App;