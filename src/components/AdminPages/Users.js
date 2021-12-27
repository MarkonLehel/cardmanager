import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from '../DataContext';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Users = () => {

    let context = useContext(DataContext);

    const [users, updateUsers] = useState([])

    const parseDate = (date) => {

        return new Date(Date.parse(date)).toISOString().split('T')[0]
    }


    useEffect(async () =>{
        fetch(context.requestUrl + `/Users`)
        .then((result) => result.json())
        .then((data) =>  updateUsers(data))}
    , [])

    let usersToShow = []
    users.forEach(user => {
        usersToShow.push({id: user.userID, firstName: user.firstName,
            lastName: user.lastName, email: user.email,
            createdAt: parseDate(user.createdAt),
            lastLogin: parseDate(user.lastLogin),
            lastPasswordChange: parseDate(user.lastPasswordChange)})
    });

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, type: 'number' },
        { field: 'firstName', headerName: 'First Name', width: 160, type: 'string' },
        { field: 'lastName', headerName: 'Last Name', width: 160, type: 'string' },
        { field: 'email', headerName: 'Email', width: 200, type: 'string' },
        { field: 'createdAt', headerName: 'Creation Date', width: 240, type: 'string' },
        { field: 'lastLogin', headerName: 'Last Login', width: 240, type: 'string' },
        { field: 'lastPasswordChange', headerName: 'Last Password Change', width: 240, type: 'string' }]


    return (
        <div className='users-listing'>
            <h2>Users:</h2>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={usersToShow}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5,8]}
            />
            </div>
            <Button color="secondary" size="medium" variant="contained" component={NavLink} to="/admin/addUser" sx={{ mt: 4, minWidth:200 }}>Add new user</Button>
        </div >
    );
}

export default Users;