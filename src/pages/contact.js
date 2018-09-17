import React from 'react'
import Link from 'gatsby-link'

const Contact = ()=> (
// class Contact extends React.Component {

//     render() {
//         return (
            <container>
            <h2>Contact Form</h2>
            <form
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
            </container>
//         )
//     }
// }
// export default Contact;
)
export default Contact