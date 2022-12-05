import React from 'react';
import errorPic from "../../assets/error404.png";
import {useNavigate} from "react-router-dom";
import "../../styles/pageNotFound/pageNotFound.css";
import Button from '@mui/material/Button';


function PageNotFound(props) {
    const Navigate = useNavigate();
    return (
        <>
            <div className="container">
                <img src={errorPic} alt="page not found"/>
                <h1>Whoops! Lost in space ?</h1>
                <p>the page you're looking for isn't found :(</p>
                <p>we suggest you back home</p>
                <Button className="button" variant="contained" onClick={() => Navigate("/")} >Back to Home</Button>
            </div>
        </>
    );
}

export { PageNotFound};