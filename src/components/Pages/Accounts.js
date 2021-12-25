import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';






const Accounts = () => {

    const [accounts, updateAccounts] = useState([{ id: 1, accountName: "Savings", balance: 100, type: "EUR" },
    { id: 1, accountName: "WWWW", balance: 100, type: "EUR" },
    { id: 2, accountName: "Savings", balance: 233, type: "EUR" },
    { id: 3, accountName: "FF", balance: 466, type: "EUR" },
    { id: 4, accountName: "Savings", balance: 345, type: "EUR" },
    { id: 5, accountName: "Yeet", balance: 100, type: "EUR" },
    { id: 6, accountName: "Deee", balance: 32445, type: "EUR" },
    { id: 7, accountName: "Savasdings", balance: 444, type: "EUR" },
    { id: 8, accountName: "SavinFFFFgs", balance: 23323, type: "EUR" },])


    const columns = [
        { field: 'id', headerName: 'ID', width: 70, type: 'number' },
        { field: 'accountName', headerName: 'Account Name', width: 130, type: 'string' },
        { field: 'balance', headerName: 'Balance', width: 130, type: 'number' },
        { field: 'type', headerName: 'Type', width: 130, type: 'string' }]


    return (
        <div className='account-listing'>
            <h2>Your current accounts:</h2>
            <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={accounts}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
            />
            </div>
        </div >
    );
}

export default Accounts;