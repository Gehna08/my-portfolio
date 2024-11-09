import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
    const projects = [
        {
            name: "CamSecure",
            description: "An Android application designed to protect your privacy by controlling camera access based on your geographic location.",
            technologies: "Android Studio, Firebase, Java",
            link: "https://github.com/Gehna08/CamSecure"
        },
        {
            name: "DoItAll",
            description: "A task management Android application that allows users to add, edit, and delete tasks, with prioritization and due date features.",
            technologies: "Android Studio, Java",
            link: "https://github.com/Gehna08/codsoft_1"
        },
        {
            name: "DailyQuotes",
            description: "An app that displays new inspiring quotes daily and lets users share their favorite quotes on social media.",
            technologies: "Android Studio, Java",
            link: "https://github.com/Gehna08/codsoft_2"
        },
        {
            name: "EventifySIU",
            description: "An online event management system that enables smooth and efficient organization of college events.",
            technologies: "Netbeans, Java",
            link: "https://github.com/Gehna08/EventifySIU"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Set interval to slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (projects.length / 2));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const displayedProjects = [
        projects[currentIndex * 2],
        projects[currentIndex * 2 + 1],
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-container">
                <div className="project-list">
                    {displayedProjects.map((project, index) => (
                        <div className="project" key={index}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <p><strong>Technologies:</strong> {project.technologies}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
                <div className="dots">
                    {[...Array(projects.length / 2)].map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
