import React from 'react';
import 'bootstrap'
import '../css/About.css'
function About() {
    return (
        <div className="About">
            <h1 className="about-header">What drives me</h1>
            <ul className="list-unstyled drive-list">
                <li>
                    Family
                </li>
                <li>
                    Knowledge
                </li>
                <li>
                    Happiness
                </li>
                <li>
                    Good stuff
                </li>
            </ul>
        </div>
    );
}

export default About;