import React from 'react';
import './Education.css';

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education-list">
                <div className="education-item">
                <h3>SNK High School</h3>
                    <p>High School Diploma</p>
                    <p>2007 - 2022</p>
                    <p>Percentage : 90% X ICSE| 85% XII CBSE </p>
                </div>
                <div className="education-item">
                    <h3>Symbiosis Institute of Technology</h3>
                    <p>Bachelor of Technology in Computer Science</p>
                    <p>2024 - 2026</p>
                    <p>CGPA : 7.6</p>
                </div>
            </div>
        </section>
    );
}

export default Education;
