import { React } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "./pages/AuthContext";
import { Container } from "react-bootstrap";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./pages/UpdateProfile";
import Exports from "./pages/Exports";

import LeafletMap from "./components/LeafletMap/LeafletMap";
import { GlobalProvider } from "./contexts/GlobalState";

function App() {
  return(
    <GlobalProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/inventory" element={<PrivateRoute><Inventory /></PrivateRoute>} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                <Route path="/exports" element={<PrivateRoute><Exports /></PrivateRoute>} />
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </GlobalProvider>
  )
}

export default App;