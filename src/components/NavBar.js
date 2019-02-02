import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
               <Toolbar>
                   <Typography variant="title" color="inherit">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo-Tinder.svg/572px-Logo-Tinder.svg.png' alt='img'/> 
                   </Typography>
               </Toolbar>
            </AppBar>

        </div>

    )
}
export default NavBar;