import React, { useState } from 'react';

const videoSources = [
  "/NewfieStock1.mp4",
  "/NewfieStock2.mp4",
  "/NewfieStock3.mp4",
  "/DogGallery.mp4",
  "/DoggieDaySpaw.mp4"
];

const Projects = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleNext = () => {
    setCurrentVideo((prevVideo) => (prevVideo + 1) % videoSources.length);
  };

  const handlePrevious = () => {
    setCurrentVideo((prevVideo) =>
      prevVideo === 0 ? videoSources.length - 1 : prevVideo - 1
    );
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="video-display">
        <span className="arrow left-arrow" onClick={handlePrevious}>&#9664;</span>
        <video key={currentVideo} controls>
          <source src={videoSources[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <span className="arrow right-arrow" onClick={handleNext}>&#9654;</span>
      </div>
    </div>
  );
};

export default Projects;

