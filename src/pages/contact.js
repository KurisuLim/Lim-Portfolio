import React from 'react'
import  "./contact-css-modules.module.css";

class Contact extends React.Component {
    constructor(){
        super()
        this.state ={

        }
        this.myMap = this.myMap.bind(this);
    }
myMap() {
    var myCenter = new google.maps.LatLng(51.508742,-0.120850);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 12};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}

render() {
    return (
        <div class='container'>
            <div style={{ textAlign:`center`}}>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
        <div class='row'>
            <div class='column'>
                <div id='map' style={{width:`100%`, height:`500px`}}></div>
            </div>
        <div class='column'>
        <form name="contact" method="POST" netlify>
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