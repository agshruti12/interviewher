import React from "react";

const VideoSubmissionCard = ({ url }) => {
  return (
    <div className="submission">
      <video width="640" height="360" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSubmissionCard;