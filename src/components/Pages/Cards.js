import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const Cards = () => {
    const [cards, updateCards] = useState([{ id: 1, cardNumber:1234567891234567, validity: "Valid", state: "Active", type: "Currency", currencyType:"EUR" },])


    let cardsToDisplay = [];
    cards.forEach(card => {
        cardsToDisplay.push({id: card.id, cardNumber:card.cardNumber,
            validity: card.validity,
            state: card.state,
            type: card.type.concat(card.currencyType != null? ` (${card.currencyType == "EUR" ? "€": "$"})`:"")})
    });



    const columns = [
        { field: 'id', headerName: 'ID', width: 70, type: 'number' },
        { field: 'cardNumber', headerName: 'Card Number', width: 260, type: 'int' },
        { field: 'validity', headerName: 'Validity', width: 160, type: 'string' },
        { field: 'state', headerName: 'State', width: 160, type: 'string' },
        { field: 'type', headerName: 'Type', width: 160, type: 'string' }]


    return (
        <div className='account-listing'>
            <h2>Your current cards:</h2>
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={cardsToDisplay}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
            />
            </div>
        </div >
    );
}

export default Cards;