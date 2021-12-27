import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataContext } from '../DataContext';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';

const AddCardPage = () => {
  let context = useContext(DataContext);
  const [success, setSuccess] = useState(false)
  const [cardType, setCardType] = useState('currency')
  const [currencyValueType, setCurrencyValueType] = useState('EUR')
  const [cardStatus, setCardStatus] = useState('active')

    let {userID} = useParams()
    const handleCardRegisterResponse = (resp ) => {
        console.log(resp.status)
      if (resp.status === 201) {
        setSuccess(true);
    }
    }

    const handleCurrencyChange = (value) => {
        setCardType(value)
    }
    const handleCurrencyTypeChange = (value) => {
        setCurrencyValueType(value)
    }

    const handleCardStatusChange = (value) => {
        setCardStatus(value)
    }

    const handleAddCard = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        

        if(data.get("cardNumber").length !== 16) {
            alert("Card number is invalid.")
        } else {
          fetch(context.requestUrl + "/Cards", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userID: userID, cardNumber: data.get("cardNumber"),valid: `${cardStatus === "active" ?true:false}`, state: cardStatus, cardType: cardType, currencyType: currencyValueType})
          }).then((resp) => handleCardRegisterResponse(resp));

        }
      };

      

    return ( 
        success? <Navigate to="/admin/cardManager"/>:
        <div className="add-card-page">
            <Container sx={{
            marginTop: 20,
            
            flexDirection: 'column',
            alignItems: 'center',
          }}>
              <h1 className='signin-text'>Add new card</h1>
                <Box component="form" onSubmit={handleAddCard} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="card-number"
                    label="Card Number"
                    name="cardNumber"
                    autoFocus
                    />

                    <Select
                    labelId="currency-label"
                    id="currency-id"
                    name="currency"
                    type="currency"
                    value={cardType}
                    required
                    fullWidth
                    onChange={(e) => handleCurrencyChange(e.target.value)}>
                <MenuItem value="currency">Currency</MenuItem>
                <MenuItem value="forint">Forint</MenuItem>
                <MenuItem value="credit">Credit</MenuItem>
                </Select>
                {cardType == "currency"?
                    <Select
                    sx={{ mt: 1 }}
                    labelId="currency-type-label"
                    id="currency-type-id"
                    name="currency-type"
                    type="currencyType"
                    value={currencyValueType}
                    required
                    fullWidth
                    onChange={(e) => handleCurrencyTypeChange(e.target.value)}>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                </Select>
                :""}
                <Select
                    sx={{ mt: 1 }}
                    labelId="card-status-label"
                    id="user-id"
                    name="card-status"
                    type="cardStatus"
                    value={cardStatus}
                    required
                    fullWidth
                    onChange={(e) => handleCardStatusChange(e.target.value)}>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="disabled">Disabled</MenuItem>
                <MenuItem value="expired">Expired</MenuItem>
                </Select>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    > Add card </Button>
                </Box>
            </Container>
        

        </div>
     );
}

export default AddCardPage;