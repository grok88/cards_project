import preloader from "../preloader/svg-loaders/three-dots.svg";
import React from "react";

const Preloader = () => {
    return (
       <div style={{ textAlign:'center'}}>
           <img src={preloader} alt="preloader"/>
       </div>
    );
}

export default Preloader;