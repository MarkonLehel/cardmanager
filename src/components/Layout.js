import Accounts from "./Pages/Accounts";
import Cards from "./Pages/Cards";
import NavBar from "./NavBar";
import Profile from "./Pages/Profile";
import Transactions from "./Pages/Transactions";

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

const Mainpage = ({user, setLoggedInUser}) => {
    return ( 
        <div className="layout-page">
            <NavBar user={user} setLoggedInUser={setLoggedInUser}/>
                <Routes>
                    <Route exact path='/accounts' element={<Accounts />} />
                    <Route exact path='/cards' element={<Cards />} />
                    <Route exact path='/transactions' element={<Transactions />} />
                    <Route exact path='/profile' element={<Profile />} />
                </Routes>
        </div>
     );
}

export default Mainpage ;