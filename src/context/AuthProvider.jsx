import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // localStorage.clear();
    const [userData , setUserData] = useState(null);

    useEffect(() => {
        if (!localStorage.getItem('employees')) {
            setLocalStorage();
        }
        const {employees , admin} = getLocalStorage();
        setUserData({employees, admin})
    }, [])
    

  return (
    <div>
        <AuthContext.Provider value={[userData , setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider