import React from 'react';
import errorPic from "../../assets/error404.png";
import {useNavigate} from "react-router-dom";

function PageNotFound(props) {
    const Navigate = useNavigate();
    return (
        <>
            <div className="container">
                <img src={errorPic} alt="page not found"/>
                <h2>Whoops !Lost in space ?</h2>
                <p>the page you're looking for isn't found :(</p>
                <p>we suggest you back home</p>
                <button onClick={() => Navigate("/")} >Back to Home</button>
            </div>
        </>
    );
}

export { PageNotFound};