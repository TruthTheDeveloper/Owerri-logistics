import React from 'react';


type authContextType = {
    user: boolean;
    login: () => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = {
    user: null,
    login: () => {},
    logout: () => {},
};



const AuthContext = React.createContext<any>({})

export default AuthContext