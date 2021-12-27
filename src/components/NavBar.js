import { Button, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from './DataContext';
import ShieldIcon from '@mui/icons-material/Shield';


const NavBar = () => {
    let context = useContext(DataContext);

    return(
        <div className='navBar'>
            <AppBar position="sticky" elevation={1}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ mr: 6 }}>CardManager</Typography>
                    {context.loggedInUser.adminLogin? 
                    <slot>
                    <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/admin/users" sx={{ mr: 3, minWidth:120 }}>Users</Button>
                    <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/admin/cardManager" sx={{ mr: 3, minWidth:120}}>Cards</Button>
                    </slot>  
                    : 
                    <slot>
                    <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/home/accounts" sx={{ mr: 3, minWidth:120 }}>Accounts</Button>
                    <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/home/cards" sx={{ mr: 3, minWidth:120 }}>Cards</Button>
                    <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/home/transactions" sx={{ mr: 3, minWidth:120 }}>Transactions</Button>
                    <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/home/profile" sx={{ mr: 3, minWidth:120 }}>Profile</Button>
                    </slot>}
                    
                    <Typography noWrap={true} sx={{ marginLeft: "auto"}}>Logged in as {context.loggedInUser.username} {context.loggedInUser.adminLogin?<ShieldIcon color="warning"/>:""}</Typography>
                    <Tooltip title="Logout" arrow>
                        <IconButton onClick={ () => {context.setLoggedInUser(null); console.log("Set user to null")}} size="medium" color="inherit" sx={{ ml: 1 }}>
                                <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>)
        }
    
        export default NavBar;