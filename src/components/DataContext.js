import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    console.log(loggedInUser);
    const requestUrl = "https://localhost:44345/api"

return (
    <DataContext.Provider
    value={{
        loggedInUser,
        setLoggedInUser,
        requestUrl
    }}
    >
    {props.children}
    </DataContext.Provider>
    	);
    };