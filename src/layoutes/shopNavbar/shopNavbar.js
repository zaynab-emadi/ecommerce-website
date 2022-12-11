import React from 'react';
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import Logo from "../../assets/logonomy-1670679421327.jpeg";
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
    AppBarSx,
    LogoSx,
    LogoSxRes, IconsBoxSx
} from "../../styles/shopNavbar/shopNavbarStyle.js";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoginIcon from '@mui/icons-material/Login';




function ShopNavbar() {
    return (
        <>
            <Box>
                <AppBar position="static" sx = {AppBarSx}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/">
                            <Box src={Logo} component="img" alt="Logo" sx={LogoSx}/>
                        </Link>
                        <Link to="/">
                            <Box src={Logo} component="img" alt="Logo" sx={LogoSxRes}/>
                        </Link>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={IconsBoxSx}>
                            <IconButton size="large" color="inherit">
                                <AddShoppingCartIcon/>
                            </IconButton>
                            <IconButton size="large" color="inherit" >
                                <LoginIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default ShopNavbar;