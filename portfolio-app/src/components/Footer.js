import React from 'react';
import { Github, Facebook, Linkedin } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <footer>
            <span className="icon"><a href="https://github.com/rjpotere" target="_blank" rel="noreferrer"><Github /></a></span>
            <span className="icon"><a href="https://www.facebook.com/ryan.potere.9" target="_blank" rel="noreferrer"><Facebook /></a></span>
            <span className="icon"><a href="https://www.linkedin.com/in/ryan-potere-1328511bb/"target="_blank" rel="noreferrer"><Linkedin /></a></span>
        </footer>
    )
}