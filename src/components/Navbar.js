import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // Check if the section is in view
                    if (entry.isIntersecting) {
                        // Update activeLink state based on the section id
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is in the viewport
        );

        // Watch each section element
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup the observer on component unmount
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">MyPortfolio</div>
            <div className="navbar-links">
                <a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a>
                <a href="#about" className={activeLink === 'about' ? 'active' : ''}>About Me</a>
                <a href="#education" className={activeLink === 'education' ? 'active' : ''}>Education</a>
                <a href="#skills" className={activeLink === 'skills' ? 'active' : ''}>Skills</a>
                <a href="#projects" className={activeLink === 'projects' ? 'active' : ''}>Projects</a>
                <a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
                <a href="/resume.pdf" className="navbar-btn" download="Gehna_Vithalani_Resume">Download Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;
