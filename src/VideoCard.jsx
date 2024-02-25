import React from "react";
import { Link } from 'react-router-dom';
import photo from './profile-icon-512x512-w0uaq4yr.png';

const VideoCard = ({ movie1}) => {
    return (
      <div className="movie">
        <div>
          {/* <p>{movie1.id}</p> */}
        </div>
  
        <div className="photo-container">
          <img src={photo} alt={movie1.Title} className="photo"/>
        </div>
  
        <div>
          {/* <span>
          <Link to={'./pages/Strengths.js'}>{movie1.question}</Link>

            </span> */}

          <h3>
          <Link to={'/upload'}>{movie1.question}</Link>
            </h3>
        </div>
      </div>
    );
  }
  
  export default VideoCard;