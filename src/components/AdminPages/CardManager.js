import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../DataContext';

const CardManager = ({activeUserId = null}) => {
    const [cards, updateCards] = useState([])
    const [users, updateUsers] = useState([])
    const [userID, setUserID] = useState(activeUserId !== null? activeUserId : "")

    let context = useContext(DataContext);

const CardStatus = ["Active", "Inactive", "Disabled", "Expired"]
const PaymentType = ["Currency", "Forint", "Credit"]


    let cardsToDisplay = [];
    cards.forEach(card => {
        console.log(card)
        let type;
        if(PaymentType[card.cardType] === "Currency"){
            type = PaymentType[card.cardType].concat(card.currencyType != null? ` (${card.currencyType == "EUR" ? "€": "$"})`:"")
        } else {
            type = PaymentType[card.cardType]
        }
        cardsToDisplay.push({id: card.cardID, cardNumber:card.cardNumber,
            validity: `${card.valid? "Valid" : "Invalid"}`,
            state: CardStatus[card.state],
            type: type})
    });


    useEffect(async() => {
        fetch(context.requestUrl + `/Users`)
        .then((result) => result.json())
        .then((data) =>  updateUsers(data))
    },[])

    useEffect(async () =>{
        if (userID !== "") {
        fetch(context.requestUrl + `/Cards/${userID}`)
        .then((result) => result.json())
        .then((data) => updateCards(data))}
    }
    , [userID])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, type: 'number' },
        { field: 'cardNumber', headerName: 'Card Number', width: 260, type: 'int' },
        { field: 'validity', headerName: 'Validity', width: 160, type: 'string' },
        { field: 'state', headerName: 'State', width: 160, type: 'string' },
        { field: 'type', headerName: 'Type', width: 160, type: 'string' }]


    return (
        <div className='card-listing'>
            <h2>Cardmanager</h2>
            <InputLabel id="user-input-label">User</InputLabel>
            <Select
                labelId="user-id-label"
                id="user-id"
                value={userID}
                onChange={(a) => setUserID(a.target.value)}
                sx={{ m: 1, minWidth: 120 }}
            >
                 <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {users.map((user) => (<MenuItem key={user.userID} value={user.userID}>{user.email}</MenuItem>))}
            </Select>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={cardsToDisplay}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5,10]}
            />
            </div>
            <Button color="secondary" size="medium" variant="contained" component={NavLink} to={`/admin/addCard/${userID}`} sx={{ mt: 4, minWidth:200 }}>Add card</Button>
        </div >
    );
}

export default CardManager;