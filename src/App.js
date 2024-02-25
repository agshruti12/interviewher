import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import VideoCard from "./VideoCard";
import menuButton from "./menu-symbol-of-three-parallel-lines.png";
import tipsPic from "./question.png";
import settings from "./settings.png";
import user from "./user.png";
import logOut from "./log-out.png";
import home from "./home.png";

import Tips from "./pages/Tips";
import Home from "./pages/Home";
import Upload from "./Upload";


// import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://localhost:4000/questionsbykeyword";

// const movie1 = {
//   "Title": "Question1",
//   "Year": "2012",
//   "imdbID": "idk",
//   "Type": "movie",
//   "Poster": "N/A"
// }


const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
        <Routes>
          <Route path="/home" element ={<Home />} />
          <Route path="/tips" element ={<Tips />} />
          <Route path="/upload" element ={<Upload />} />

        </Routes>
    
      <div className="menu-container">
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
          <img src ={menuButton}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItem img={home} to="/home" text="Home" />
            <DropdownItem img={tipsPic} to="/tips" text="Tips" />

            <DropdownItem img = {user} to="/upload" text="Upload"/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {logOut} text = {"Log Out"}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

function DropdownItem({ img, to, text }){
  return(
    <li className="dropdownItem">
    <img src={img}/>
    <Link to={to}>{text}</Link>
  </li>
  )
}
export default App;