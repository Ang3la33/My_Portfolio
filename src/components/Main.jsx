import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <img src="/portfolio_pic.jpg" alt="Angie" className="portfolio-pic" />
      <div className="speech-bubble">
        <p>
          Hi, I’m Angie! :)<br />
          UI/UX Designer &<br />
          Software Developer.<br />
          <Link to="/projects" className="projects-link">View my projects!</Link>
        </p>
      </div>
    </div>
  );
};

export default Main;


