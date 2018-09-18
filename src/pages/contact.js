import React from 'react'
import  "./contact-css-modules.module.css";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends React.Component {
    static defaultProps = {
        center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
    };

render() {
    return (
        <div class='container'>
            <div style={{ textAlign:`center`}}>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
        <div class='row'>
            <div class='column'>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: `${process.env.GOOGLE_API}` }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />
                </GoogleMapReact>
            </div>
            </div>
        <div class='column'>
        <form name="contact-form" method="POST" netlify>
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