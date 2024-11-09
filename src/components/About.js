import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Image on the right side (circular as requested for the About section) */}
        <div className="about-image">
          <img src="final.jpg" alt="About Me" />
        </div>
        {/* Text content on the left side */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            My journey into technology started with a fascination for how things work behind the scenes, which led me
            to explore programming and development. I specialize in creating innovative applications and tools that
            streamline tasks, improve user experience, and solve complex problems efficiently.
          </p>
          <p>
            From mobile apps to enterprise-level systems, I’m constantly learning new technologies and improving my
            skills. I believe in the power of collaboration, and I strive to work with diverse teams to deliver meaningful
            products.
          </p>
          <p>
            When I’m not coding, you can find me exploring new technologies, working on creative projects, or simply
            enjoying some downtime with art and design.
          </p>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="decorative-elements">
        <div className="circle"></div>
        <div className="rectangle"></div>
      </div>
    </section>
  );
}

export default About;
