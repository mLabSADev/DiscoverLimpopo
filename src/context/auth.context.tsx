import React, { useEffect, useState } from "react";
import { User } from "../models/user";
import AuthService from "../services/auth";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface ProviderProps {
    user: User | null
    isInitializing: boolean
    setCurrentUser: (user: User) => void
    signOut: () => void
}

interface AuthProviderProps {
    children: any
    authProps?: ProviderProps
}

const AuthContext = React.createContext<ProviderProps>({
    user: null,
    isInitializing: true,
    setCurrentUser: () => {},
    signOut: () => {}
})

export const AuthProvider = ({children, authProps}: AuthProviderProps) => {
    const [user, setCurrentUser] = useState<User | null>(authProps ? authProps.user : null)
    const [isInitializing, setInitializing] = useState(true)

    useEffect(() => {
      AuthService.authState(user => {
        setCurrentUser(user)
        setInitializing(false)
    })
    }, [])

    const signOut = () => {
        setCurrentUser(null)
        return AuthService.signOut()
    }

    return (
        <AuthContext.Provider value={{user, setCurrentUser, isInitializing, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)