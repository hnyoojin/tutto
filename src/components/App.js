import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
