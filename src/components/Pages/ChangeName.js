import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Navigate } from 'react-router-dom';
import { DataContext } from '../DataContext';
import { useContext, useState } from 'react';

const ChangeName = () => {
  let context = useContext(DataContext);

    const[success,setSuccess] = useState(false)

    const handleNameChangeResponse = (resp) => {
        console.log(resp.status)
        if (resp.status === 200) {
            setSuccess(true);
        } else{
          alert("Name change failed.")
        }
    }

    const handleNameChange = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
          fetch(context.requestUrl + "/Users/ChangeName", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: context.loggedInUser.id,firstName: data.get('lastName'), lastName: data.get('lastName')})
          }).then((resp) => handleNameChangeResponse(resp));
      };

    return ( 
        success? <Navigate to="/home/profile"/> :
        <div className="name-change-page">

            <Container sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
              <h1 className='change-name-text'>Change name</h1>
                <Box component="form" onSubmit={handleNameChange} noValidate sx={{ mt: 1 }}>
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
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    > Change name </Button>
                </Box>
            </Container>
        

        </div>
     );
}

export default ChangeName ;