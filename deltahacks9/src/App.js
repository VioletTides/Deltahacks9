import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './createAccount';

export default function App() {

  return (
    <div>
      <h1>Register</h1>
    </div>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">CreateAccount</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Routes>
    //       <Route path="/createAccount">
    //         <CreateAccount />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
    
  );
}

function createAccount() {
  return <h2>createAccount</h2>;
}