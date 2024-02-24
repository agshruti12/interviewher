import React from "react";
import { Link } from 'react-router-dom';


const VideoCard = ({ movie1}) => {
    return (
      <div className="movie">
        <div>
          <p>{movie1.id}</p>
        </div>
  
        <div>
          <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title} />
        </div>
  
        <div>
          {/* <span>
          <Link to={'./pages/Strengths.js'}>{movie1.question}</Link>

            </span> */}

          <h3>
          <Link to={'/tips'}>{movie1.question}</Link>
            </h3>
        </div>
      </div>
    );
  }
  
  export default VideoCard;