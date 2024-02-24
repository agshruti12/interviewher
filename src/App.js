import React, { useState, useEffect } from "react";

import VideoCard from "./VideoCard";
import menuButton from "./menu-symbol-of-three-parallel-lines.png";
import tipsPic from "./question.png";
import settings from "./settings.png";
import user from "./user.png";
import logOut from "./log-out.png";
// import SearchIcon from "./search.svg";
import "./App.css";

// const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const movie1 = {
  "Title": "Question1",
  "Year": "2012",
  "imdbID": "idk",
  "Type": "movie",
  "Poster": "N/A"
}


const App = () => {
  const [open, setOpen] = useState(false);
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   searchMovies("Batman");
  // }, []);

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();

  //   setMovies(data.Search);
  // };

  return (
    <div className="app">
      <h1>InterviewHer</h1>

      <div className="search">
        <input
          placeholder="Search for interview questions"
          value=""
          onChange={() =>{}}
        />
        {/* <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        /> */}
      </div>

      <div className="container">
        <VideoCard movie1={movie1} />
      </div>

      <div className="menu-container">
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
          <img src ={menuButton}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItem img = {tipsPic} text = {"Tips"}/>
            <DropdownItem img = {user} text = {"My Profile"}/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {logOut} text = {"Log Out"}/>


          </ul>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props){
  return(
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a> {props.text}</a>
    </li>
  )
}
export default App;