import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const Transactions = () => {
    const [transactions, updateTransactions] = useState([{ id: 1, date: "2011-11-1", amount: 100, type: "Successful", cardNumber:"1234567891234567", vendor:"Yeetus Corp" },])


    const columns = [
        { field: 'id', headerName: 'ID', width: 70, type: 'number' },
        { field: 'date', headerName: 'Date', width: 260, type: 'string' },
        { field: 'amount', headerName: 'Amount', width: 160, type: 'number' },
        { field: 'type', headerName: 'Status', width: 160, type: 'string' },
        { field: 'cardNumber', headerName: 'Card Number', width: 260, type: 'number' },
        { field: 'vendor', headerName: 'Vendor', width: 260, type: 'string' }]


    return (
        <div className='transaction-listing'>
            <h2>Your current accounts:</h2>
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={transactions}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
            />
            </div>
        </div >
    );
}

export default Transactions;