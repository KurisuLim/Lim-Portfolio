import React from 'react'
import  "./contact-css-modules.module.css";
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Contact extends React.Component {

render() {
    return (
        <div class='container'>
            <div style={{ textAlign:`center`}}>
                <h2>Contact</h2>
                <p>Swing by for a cup of coffee, or leave me a message:</p>
            </div>
        <div class='row'>
        <div class='column'>
        <form name="contact-form" method="POST" data-netlify='true' data-netlify-honeypot='bot-field' netlify>
            <p>
                <label>Your Name: <input type="text" name="name" required/></label>   
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" required/></label>
            </p>
            <p>
                <label>Message: <textarea name="message" style={{height:`170px`}} required></textarea></label>
            </p>
            <p>
                <input type="submit" value='Submit'/>
            </p>
        </form>
        </div>
        </div>
        </div>
        )
    }
}

export default Contact;