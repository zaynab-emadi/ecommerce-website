import React from 'react';
import adminImg from '../../../assets/login admin.webp';
import {Box, FormControl, Input, InputLabel} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

function AdminLogin() {
    return (
        <>
        <Box sx={{display : "flex" , m : '0' }} >
            <Box sx={{display : {xs : 'none', md :'flex' }}}>
                <img src = {adminImg} alt={'adminLogin'} style={{width : '70%'}} />
            </Box>
            <Box sx={{display : 'flex' , flexDirection : 'column' , width : '50%' , height : '100%'  }}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Admin UserName
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        fullWidth
                    />
                </FormControl>
            </Box>
        </Box>
        </>
    );
}

export { AdminLogin} ;