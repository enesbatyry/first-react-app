import React from "react";
import preloader from "../assets/preloader.gif";

class Preloader extends React.Component{
    render() {
        return <img src={preloader}/>
    }
}

export default Preloader