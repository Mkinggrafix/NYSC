import React, { useContext, useEffect, useState } from "react";
import auth from '../'

const AuthContext = React.createContext({ children });

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider() {
    const [currentUser, setCurrentUSer] = useState();

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUSer(user)

        return unsubscribe
        }, [])
    })

    const value = {
        currentUser,
        signup
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
