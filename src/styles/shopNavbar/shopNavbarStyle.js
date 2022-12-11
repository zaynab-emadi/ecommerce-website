import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),

    },
    marginRight: theme.spacing(2),
    marginLeft: "40px",
    width: '700px',
    [theme.breakpoints.down('md')]: {
        display : "none",
    },

}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

}));

export const AppBarSx =
{bgcolor : "#0E1216"};
export const LogoSx = {height:'80px',display : {xs : "none" , md : "flex"}};
export const LogoSxRes = {height:'60px',display : {xs : "flex" , md : "none"}};
export const IconsBoxSx = { display: { xs: 'flex', md: 'flex' }  };
