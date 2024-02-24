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
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== null) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);

  const searchMovies = async (keywords) => {
    try {
      // console.log(keywords);
      // console.log(`${API_URL}?question=${encodeURIComponent(keywords)}`);
      // console.log(API_URL);
      const response = await fetch(`${API_URL}?question=${encodeURIComponent(keywords)}`);
      // console.log(response);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      // console.log(data);
      // Assuming your response is an array of movies directly
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
      // Handle errors appropriately
    }
  };


  return (
    <div className="app">
      <h1>InterviewHer</h1>
        <Routes>
          <Route path="/tips" element ={<Tips />} />
        </Routes>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        {/* <img
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
        /> */}
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <VideoCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      <div className="menu-container">
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
          <img src ={menuButton}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItem img={home} to="" text="Home" />
            <DropdownItem img={tipsPic} to="/tips" text="Tips" />

            <DropdownItem img = {user} text = {"My Profile"}/>
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