import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DataContext } from './components/DataContext';
import {useContext} from "react";

import Users from './components/AdminPages/Users';



function App() {

let context = useContext(DataContext);


  return (
    <div className="App">
        <Router>
          {context.loggedInUser == null?
          <Routes>
            <Route exact path="/login" element={<Login adminLogin={false}/>} />
            <Route exact path="/admin" element={<Login adminLogin={true}/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes> :

          context.loggedInUser.adminLogin? 
          <Routes>
            <Route path="/admin/*" element={<Layout/>}/>
            <Route path="*" element={<Navigate to="/admin/users"/>} /> 
          </Routes>
          :
          <Routes>
            <Route path="/home/*" element={<Layout/>}/>
            <Route path="/admin/users" element={<Users/>}/>
            <Route path="/admin/cards" element={<Layout/>}/>
            <Route path="*" element={<Navigate to="/home/profile"/>} />
          </Routes>}
        </Router>
    </div>
  );
}

export default App;
