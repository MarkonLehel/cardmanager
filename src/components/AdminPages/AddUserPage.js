import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataContext } from '../DataContext';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AddUserPage = () => {
  let context = useContext(DataContext);
  const [success, setSuccess] = useState(false)

    const handleRegisterResponse = (resp ) => {
        console.log(resp.status)
      if (resp.status === 201) {
        setSuccess(true);
    } else{
      alert("This email is already in use!")
    }
    }

    const handleAddUser = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if(data.get('password') !== data.get("retype-password")) {
            alert("Passwords do not match.")
        } else {
          fetch(context.requestUrl + "/Users", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName: data.get("firstName"), lastName: data.get("lastName"), email: data.get('email'), hashedPassword: data.get('password')})
          }).then((resp) => handleRegisterResponse(resp));

        }
      };

      

    return ( 
        success? <Navigate to="/admin/users"/>:
        <div className="login-page">
            <Container sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
              <h1 className='signin-text'>Add new user</h1>
                <Box component="form" onSubmit={handleAddUser} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="first-name"
                    label="First Name"
                    name="firstName"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="last-name"
                    label="Last Name"
                    name="lastName"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    />
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
                    > Add user </Button>
                </Box>
            </Container>
        

        </div>
     );
}

export default AddUserPage;