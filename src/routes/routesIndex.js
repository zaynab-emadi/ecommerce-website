import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {AdminLogin, Dashboard, IntroPage} from "../pages/pagesIndex";

function RoutesIndex() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IntroPage/>}>

                    </Route>
                    <Route path="/loginAdmin" element={<AdminLogin/>}/>
                    <Route path="/adminPanel/dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutesIndex;
