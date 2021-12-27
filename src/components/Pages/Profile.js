import { Avatar, Button, Container, Stack } from '@mui/material';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../DataContext';

const Profile = () => {
    let context = useContext(DataContext);

    return (     
        <div className='profile-page'>
                <h2>Profile of </h2>
                <h1>{context.loggedInUser.username} </h1>
                <Container justifyContent="flex-end" spacing={2} sx={{width:200, alignContent:"center"}}>
                    <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/home/changePassword" sx={{minWidth:200 }}>Change password</Button>
                    <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/home/changeName" sx={{ mt:2, minWidth:200 }}>Change name</Button>
                </Container>
        </div>
    );
}

export default Profile;