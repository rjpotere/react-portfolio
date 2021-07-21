import React from 'react';

export default function ContactMe() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>Contact me....!</p>
            <form>
                <div className="contactForm">
                <input placeholder="Name"/>
                <input placeholder="Email address"/>
                <textarea placeholder="Leave a message!"/>
                </div>
            </form>
        </div>
    )
}

