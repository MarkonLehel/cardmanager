import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const Transactions = () => {
    const [transactions, updateTransactions] = useState([])

    let context = useContext(DataContext);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, type: 'number' },
        { field: 'date', headerName: 'Date', width: 260, type: 'string' },
        { field: 'amount', headerName: 'Amount', width: 160, type: 'number' },
        { field: 'type', headerName: 'Status', width: 160, type: 'string' },
        { field: 'cardNumber', headerName: 'Card Number', width: 260, type: 'number' },
        { field: 'vendor', headerName: 'Vendor', width: 260, type: 'string' }]


        useEffect(async () =>{
            fetch(context.requestUrl + `/Accounts/${context.loggedInUser.id}`)
            .then((result) => result.json())
            .then((data) => updateTransactions(data))}
        , [])

    return (
        <div className='transaction-listing'>
            <h2>Your transactions:</h2>
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={transactions}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5,10]}
            />
            </div>
        </div >
    );
}

export default Transactions;