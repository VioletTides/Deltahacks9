import { React } from "react"
import CreateAccount from "./CreateAccount";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  return(
    // route to the create account page
    <div className="App">
      <h1>App</h1>
      <Router>
        <Route path="/createAccount" component={CreateAccount} />
      </Router>
    </div>
  )
}
