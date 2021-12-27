import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const Accounts = () => {

    let context = useContext(DataContext);

    const [accounts, updateAccounts] = useState([])



    useEffect(async () =>{
        fetch(context.requestUrl + `/Accounts/${context.loggedInUser.id}`)
        .then((result) => result.json())
        .then((data) => updateAccounts(data))}
    , [])

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
                rowsPerPageOptions={[5,10]}
            />
            </div>
        </div >
    );
}

export default Accounts;