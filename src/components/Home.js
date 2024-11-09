import React from 'react';
import './Home.css';

function Home() {
  const byline = 'A Creative Software Developer'; // Text to display

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Text content on the left */}
        <div className="home-text">
          <h2>Hey there,I am</h2>
          <h1>Gehna Vithalani</h1>
          <h2>{byline}</h2>
        </div>
        {/* Image on the right */}
        <div className="home-image">
          <img src="profile.jpg" alt="Home" />
        </div>
      </div>
      {/* Creative background with floating shapes */}
      <div className="background-elements">
        <div className="circle large"></div>
        <div className="circle small"></div>
        <div className="ellipse"></div>
        <div className="triangle"></div>
      </div>
    </section>
  );
}

export default Home;
