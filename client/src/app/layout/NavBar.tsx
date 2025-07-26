import { DarkMode, Favorite, LightMode, Message, People, ShoppingCart, WavingHand } from "@mui/icons-material";
import { AppBar, Typography, Toolbar, IconButton, ListItem, List, Icon, Badge, Box, Tooltip, LinearProgress } from "@mui/material";
import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setDarkMode } from "./uiSlice";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contacts' }
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
];

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#baecf9'
    }
};

export default function NavBar() {

    const {isLoading, darkMode} = useAppSelector(state => state.ui);

    const dispatch = useAppDispatch();

    return (
        <AppBar position="fixed">   
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                <Box display="flex" alignItems="center">
                    <Typography component={NavLink} to="/" sx={navStyles} variant="h6">RE-STORE</Typography>
                    <IconButton onClick={() => dispatch(setDarkMode())}>
                        {darkMode ? <DarkMode/> : <LightMode sx={{color: 'yellow'}} />}
                    </IconButton>
                </Box>

                <Box>
                    <List sx={{display: 'flex'}}>
                        {midLinks.map(({title, path}) => (
                            <ListItem 
                                component={NavLink} 
                                to={path} 
                                key={path} 
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box display="flex" alignItems="center">
                    <IconButton  size="large" sx={navStyles}>
                        <Tooltip id="button-report" title="4 items in cart">
                            <Badge badgeContent='4' color="secondary">
                                <ShoppingCart></ShoppingCart>
                            </Badge>
                        </Tooltip>
                    </IconButton>

                    <IconButton  size="large" sx={navStyles}>
                        <Tooltip id="button-report" title="4 unread messages">
                            <Badge badgeContent='2' color="secondary">
                                <Message></Message>
                            </Badge>
                        </Tooltip>
                    </IconButton>

                    <IconButton size="large" sx={navStyles}>
                        <Tooltip id="button-report" title="2 new waves">
                            <Badge badgeContent='2' color="secondary">
                                <WavingHand></WavingHand>
                            </Badge>
                        </Tooltip>
                    </IconButton>

                    <IconButton  size="large" sx={navStyles}>
                        <Tooltip id="button-report" title="2 new friend requests">
                            <Badge badgeContent='2' color="secondary">
                                <People></People>
                            </Badge>
                        </Tooltip>
                    </IconButton>

                    <IconButton  size="large" sx={navStyles}>
                        <Tooltip id="button-report" title="1 new like">
                            <Badge badgeContent='1' color="secondary">
                                <Favorite></Favorite>
                            </Badge>
                        </Tooltip>
                    </IconButton>

                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem 
                                component={NavLink} 
                                to={path} 
                                key={path} 
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>

            {isLoading && (
                <Box sx={{width: '100%'}}>
                    <LinearProgress color="secondary" />
                </Box>
            )}

        </AppBar>
)
}