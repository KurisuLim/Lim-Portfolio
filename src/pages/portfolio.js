import React from 'react';
import Container from "../components/container";
import styles from "./portfolio-css-modules.module.css";
console.log(styles);

const Project = props =>
<div className={styles.project}>
    <img src={props.projectPicture} className={styles.projectPicture} alt="" />
    <div className={styles.description}>
    <h2 className={styles.projectName}>
        {props.projectName}
    </h2>
    <p className={styles.excerpt}>
        {props.excerpt}
    </p>
    </div>
</div>
class Portfolio extends React.Component{
    
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <Container>
                <h1>Coming Soon</h1>
                <p>Still working on it</p>
                <Project
                projectName="Weather App"
                projectPicture="https://lh3.googleusercontent.com/09a4ddit1zO4Qns_3zjhO7bgUIGDs9Hb1EInLPq8p-yP5__Jt78piHWMojxYTo8e9we3cePYhxv44A1UuXEU6mxBiQ"
                excerpt="Weather App."
                />
            </Container>
        )
    }
}
export default Portfolio;