import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState("Username");
    console.log(loggedInUser);

return (
    <DataContext.Provider
    value={{
        loggedInUser,
        setLoggedInUser
    }}
    >
    {props.children}
    </DataContext.Provider>
    	);
    };