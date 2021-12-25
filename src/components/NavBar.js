import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

const NavBar = ({user, setLoggedInUser}) => {
    return(
        <div className='navBar'>
            <AppBar position="sticky" elevation={0}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ mr: 6 }}>CardManager</Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 4 }}>Accounts</Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 4 }}>Cards</Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 4 }}>Transactions</Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 4 }}>Profile</Typography>
                    <Typography noWrap={true} sx={{ marginLeft: "auto"}}>Logged in as {user}</Typography>
                    <IconButton onClick={ () => {setLoggedInUser(null); console.log("Set user to null")}} size="medium" color="inherit" sx={{ ml: 1 }}>
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>)
        }
    
        export default NavBar;