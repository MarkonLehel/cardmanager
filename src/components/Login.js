import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from './DataContext';
import ShieldIcon from '@mui/icons-material/Shield';


const Login = ({adminLogin}) => {

  let loginEmail;
  let context = useContext(DataContext);
    const handleLoginResponse = (resp, returnData) => {
      if(resp.status == 200){
        context.setLoggedInUser({username: loginEmail, id: returnData, adminLogin: adminLogin})
      } else if (resp.status == 400) {

      } else {
        //404
      }
    } 

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        loginEmail = data.get('email')
        fetch(context.requestUrl + "/Login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: data.get('email'), password: data.get('password'), adminLogin: adminLogin})
        }).then((resp) => resp.json()
        .then( (data) => handleLoginResponse(resp, data)));
      };


    return ( 
        <div className="login-page">

            <Container sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
              <h1 className='signin-text'>Please sign in</h1>
                <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
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
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    > Sign In {adminLogin? <ShieldIcon sx={{ ml: 1 }}/>: ""}</Button>
                    <NavLink to="/register">
                         {"Don't have an account? Sign Up"}
                    </NavLink>
                </Box>
            </Container>
        

        </div>
     );
}

export default Login ;