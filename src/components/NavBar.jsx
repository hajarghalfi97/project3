import React from 'react';

const Navbar = ({ setContactVisible, setAboutVisible, contactVisible, aboutVisible }) => {
  return (
    <ul>
      <li><a className="active" href="/">Home</a></li>
      <li><a href="https://www.sciencedaily.com/news/health_medicine/fitness/">News</a></li>
      <li>
        <button onClick={() => setContactVisible(!contactVisible)}>
          {contactVisible ? 'Hide Info' : 'Contact'}
        </button>
      </li>
      <li>
        <button onClick={() => setAboutVisible(!aboutVisible)}>
          {aboutVisible ? 'Hide Info' : 'About'}
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
