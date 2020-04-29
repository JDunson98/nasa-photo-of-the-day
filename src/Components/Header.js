import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureSection from "./PictureSection";
import Explanation from "./Explanation"

const Header = props => {
  
    const [data, setData] = useState({})
  
      useEffect(() => {
          axios.get("https://api.nasa.gov/planetary/apod?api_key=8TGiWwwK8BflhA0XinsioUtedTvEkyVRnUZdKswt")
              .then(response => {
                  console.log( response);
                  setData(response.data)
              })
              .catch(console.log);
      }, []);
  
    return (
      <div className="header">
        <h1>{data.title}</h1>
        <h3>{data.date}</h3>
        <PictureSection url={data.url}/>
        <Explanation explanation={data.explanation}/>
      </div>
    )
  }

export default Header;