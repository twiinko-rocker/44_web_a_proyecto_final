import { createContext, useContext, useEffect, useState } from "react";
import { logoutRequest, profileRequest } from "../api/auth";

//Contexto de autenticación

export const AuthContext = createContext()

//2. consumir el contexto

export const useAuth = () => useContext(AuthContext)

// 3. Proveer el contexto

export const AuthProvider = ({ children }) => {

    //logica de codigo

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //verificar si al cargar la app el usuario ya tiene un token valido

    useEffect(() => {
        
        const checkLogin = async () => {
            try {
                const res = await profileRequest()
                setUser(res.data)
            } catch (error) {
                console.log(error)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        checkLogin()

    }, [])

    //cerrar sesion

    const logout = async () => {
        await logoutRequest()
        setUser(null)
    }



    return (
        <AuthContext.Provider value={{ user, setUser, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}  