import React from 'react'
import Link from 'gatsby-link'

class Contact extends React.Component {
    render() {
        return (
            <container>
            <h2>Contact Form</h2>
                <form
                name='contact'
                method='post'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                netlify>
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
                placeholder='Your Email'
                required
                />
                <br/>
                <input
                name='message'
                type='textarea'
                placeholder='Message'
                required
                />
                <br/>
                <button>
                    Send Message
                </button>
                </form>
            </container>
        )
    }
}
export default Contact;
