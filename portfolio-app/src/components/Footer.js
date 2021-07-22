import React from 'react';
import { Github, Facebook, Linkedin } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <footer>
            <span className="icon"><Github /></span>
            <span className="icon"><Facebook /></span>
            <span className="icon"><Linkedin /></span>
        </footer>
    )
}