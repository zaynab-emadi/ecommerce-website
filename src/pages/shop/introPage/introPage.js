import React from 'react';
import ShopNavbar from "../../../layoutes/shopNavbar/shopNavbar";
import {Outlet} from "react-router-dom";

function IntroPage(props) {
    return (
        <>
            <ShopNavbar/>
            <Outlet/>
        </>
    );
}

export {IntroPage};
