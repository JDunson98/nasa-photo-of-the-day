import React from "react";
import "./PictureSection.css"

const PictureSection = props => {
    return (
        <div><img src={props.url} alt="NASA Photo of the Day"></img></div>
        
    )
    
}



export default PictureSection;