import React from 'react';

export default function ContactMe() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>Contact me....!</p>
            <form>
                <div className="contactForm">
                <input placeholder="Name"/>
                <textarea placeholder="Leave a message!"/>
                </div>
            </form>
        </div>
    )
}

