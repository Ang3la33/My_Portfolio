import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      <ul>
      <li>
          <a href="https://www.linkedin.com/in/angela-flynn-4aa354278/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Ang3la33" className='github' target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        {location.pathname === "/projects" ? (
          <li><Link to="/" className='projects-link'>Home</Link></li>
        ) : (
          <li><Link to="/projects" className='projects-link'>View Projects</Link></li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
