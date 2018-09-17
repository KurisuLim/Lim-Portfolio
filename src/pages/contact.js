import React from 'react'
import Link from 'gatsby-link'

class Contact extends React.Component {
    render() {
        return (
            <container>
            <h2>Contact Form</h2>
                <form
                name='contact-form'
                method='POST'
                action='/success'
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
                <button
                type='submit'>
                    Send Message
                </button>
                </form>
            </container>
        )
    }
}
export default Contact;
