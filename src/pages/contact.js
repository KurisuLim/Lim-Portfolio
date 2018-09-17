import React from 'react'
import Link from 'gatsby-link'

class Contact extends React.Component {
    render() {
        return (
    <div>
        <h2>Contact Form</h2>
        <form name="contact-form" method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
        >
        <input
        name='name'
        type='text'
        placeholder='Your Name'
        required
        />
        <br/>
        <input
        name='email'
        type='email'
        placeholder='name@name.com'
        required
        />
        <br/>
        <textarea
        name='message'
        type='text'
        placeholder='Message'
        required
        />
        <br/>
        <div data-netlify-recaptcha></div>
        <button
        type='submit'>
            Send Message
        </button>
        </form>
    </div>
        )
    }
}
export default Contact;