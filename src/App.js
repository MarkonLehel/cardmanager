
import './App.css';
import {useContext} from "react";
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



function App() {

let context = useContext(DataContext);


  return (

    <div className="App">
        <Router>
          {context.loggedInUser == null?
          <Routes>
            <Route exact path="/login" element={<Login setLoggedInUser={context.setLoggedInUser}/>} />
            <Route exact path="/register" element={<Register setLoggedInUser={context.setLoggedInUser}/>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes> :
          <Routes>
            <Route path="/home/*" element={<Layout user={context.loggedInUser} setLoggedInUser={context.setLoggedInUser}/>}/>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>}
        </Router>
    </div>
  );
}

export default App;
