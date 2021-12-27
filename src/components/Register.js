import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { DataContext } from './DataContext';
import { useContext } from 'react';

const Register = () => {
  let context = useContext(DataContext);

    const handleRegisterResponse = (resp,data ) => {
      if (resp.status === 201) {
      context.setLoggedInUser({username: data.email, id: data.id, admin: false})
    }
    alert("This email is already in use!")
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if(data.get('password') !== data.get("retype-password")) {

          alert("Passwords do not match.")
          return;
        } else {
          fetch(context.requestUrl + "/Users", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName: data.get("firstName"), lastName: data.get("lastName"), email: data.get('email'), hashedPassword: data.get('password')})
          }).then((resp) => resp.json().then( (data) => handleRegisterResponse(resp ,data)));

        }
      };


    return ( 
        <div className="registration-page">

            <Container sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
              <h1 className='registration-text'>Registration</h1>
                <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
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
                    > Register </Button>
                    <NavLink to="/login">
                         {"I already have an account"}
                    </NavLink>
                </Box>
            </Container>
        

        </div>
     );
}

export default Register ;