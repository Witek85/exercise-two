import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

function About() {
    return (
        <div class="about">
            <Link to="/">back</Link>
            About page
        </div>
    )
}

export default About;