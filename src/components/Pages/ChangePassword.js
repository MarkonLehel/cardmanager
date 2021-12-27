import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Navigate, NavLink } from 'react-router-dom';
import { DataContext } from '../DataContext';
import { useContext, useState } from 'react';

const ChangePassword = () => {
  let context = useContext(DataContext);

    const[success,setSuccess] = useState(false)

    const handlePasswordChangeResponse = (resp) => {
        console.log(resp.status)
        if (resp.status === 200) {
            setSuccess(true);
        } else{
          alert("Password change failed.")
        }
    }

    const handlePasswordChange = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if(data.get('password') !== data.get("retype-password")) {
          alert("Passwords do not match.")
        } else {
          fetch(context.requestUrl + "/Users/ChangePassword", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: context.loggedInUser.id, password: data.get('password')})
          }).then((resp) => handlePasswordChangeResponse(resp));

        }
      };

    return ( 
        success? <Navigate to="/home/profile"/> :
        <div className="password-change-page">

            <Container sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
              <h1 className='change-password-text'>Change password</h1>
                <Box component="form" onSubmit={handlePasswordChange} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="retype-password"
                    label="Retype password"
                    type="password"
                    id="retype-password"
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    > Change password </Button>
                </Box>
            </Container>
        

        </div>
     );
}

export default ChangePassword ;