import React from 'react';
import './Skills.css';

function Skills() {
    console.log('Skills component loaded');

    const technicalSkills = [
        "Java", "C#", "Python", "C/C++",
        "Database Management", "Game Development",
        "App Development", "Web Development"
    ];

    const developmentMethodologies = [
        "Agile Software Development", "Problem Solving"
    ];

    const softSkills = [
        "Leadership", "Project Management"
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills-category technical-skills">
                <h3>Technical Skills</h3>
                <div className="skills-list">
                    {technicalSkills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-category">
                <h3>Development Methodologies</h3>
                <div className="skills-list">
                    {developmentMethodologies.map((skill, index) => (
                        <div key={index} className="skill-item">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-category">
                <h3>Soft Skills</h3>
                <div className="skills-list">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
