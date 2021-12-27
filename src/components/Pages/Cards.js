import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const Cards = () => {
    const [cards, updateCards] = useState([])

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


    useEffect(async () =>{
        fetch(context.requestUrl + `/Cards/${context.loggedInUser.id}`)
        .then((result) => result.json())
        .then((data) => updateCards(data))}
    , [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, type: 'number' },
        { field: 'cardNumber', headerName: 'Card Number', width: 260, type: 'int' },
        { field: 'validity', headerName: 'Validity', width: 160, type: 'string' },
        { field: 'state', headerName: 'State', width: 160, type: 'string' },
        { field: 'type', headerName: 'Type', width: 160, type: 'string' }]


    return (
        <div className='card-listing'>
            <h2>Your current cards:</h2>
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={cardsToDisplay}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5,10]}
            />
            </div>
        </div >
    );
}

export default Cards;