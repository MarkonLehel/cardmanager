import Accounts from "./Pages/Accounts";
import Cards from "./Pages/Cards";
import NavBar from "./NavBar";
import Profile from "./Pages/Profile";
import Transactions from "./Pages/Transactions";
import { DataContext } from '../components/DataContext';
import { useContext } from "react";

import {
    Routes,
    Route
  } from "react-router-dom";
import Users from "./AdminPages/Users";
import AddUserPage from "./AdminPages/AddUserPage";
import AddCardPage from "./AdminPages/AddCardPage";
import CardManager from "./AdminPages/CardManager";


const Mainpage = () => {
let context = useContext(DataContext);

    return ( 
        <div className="layout-page">
            <NavBar/>
            {context.loggedInUser.adminLogin? 
                <Routes>
                    <Route exact path='/users' element={<Users />} />
                    <Route exact path='/addUser' element={<AddUserPage />} />
                    <Route exact path='/addCard/:userID' element={<AddCardPage />} />
                    <Route exact path='/cardManager' element={<CardManager />} />
                </Routes>
            :
                <Routes>
                    <Route exact path='/accounts' element={<Accounts />} />
                    <Route exact path='/cards' element={<Cards />} />
                    <Route exact path='/transactions' element={<Transactions />} />
                    <Route exact path='/profile' element={<Profile />} />
                </Routes>
                }
        </div>
     );
}

export default Mainpage ;