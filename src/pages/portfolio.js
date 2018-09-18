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
                /><br />
                <Project
                projectName="VSTDA"
                projectPicture="https://lh3.googleusercontent.com/fUK61up5_TBeixVZ5qx2ae0q8roxlpDDttVCiWFn8OxO6_Y4ZfN9zqsQGhElc3MaGY1JFS7Q3krYvxZ8jDxD3uq3DA"
                excerpt="VSTDA."
                /><br />
                <Project
                projectName="SDJS App"
                projectPicture="https://lh3.googleusercontent.com/0g8XeT-wzczUFg6eyMpTA9RxNlYGFPatk8GcUeXgrSzGAlbwcqiy8LDBByoYjSbbd-WStqsg_lOKRzZ2R1kqdsklUg"
                excerpt="SDJS App."
                /><br />
                <Project
                projectName="Movie Finder App"
                projectPicture="https://lh3.googleusercontent.com/PtX9vLrW0gG0jfuR4C11OYQd8cjElRg-uDzx6R00TRnk-jCecneow01NJLWsCpoiXONN33UwB1XETyASuqhqrubw1sE"
                excerpt="Movie Finder App."
                /><br />
                <Project
                projectName="Budget Tracker"
                projectPicture="https://lh3.googleusercontent.com/7sJt40a53wvzPUgkJaRkvsskgsspFopp2jjuQVi-JEch-KwYtE8fCrwZmy2ltqPgHZf_UIaTmcNjfCAT61imIxcV"
                excerpt="Budget Tracker."
                /><br />
            </Container>
        )
    }
}
export default Portfolio;