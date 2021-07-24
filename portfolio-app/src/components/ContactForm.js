import React from 'react';


export default function ContactForm() {
    return (
        <div className='contactMeDiv'>
            <form className="contactForm">
                    <input className="input" placeholder="Name"/>
                    <input className="input" placeholder="Email address"/>
                    <textarea className="input" placeholder="Leave a message!"/>
                    <div>
                    <button type='submit' className='submitBtn btn btn-primary'>Send</button>
                    </div>
            </form>
        </div>
    )
}