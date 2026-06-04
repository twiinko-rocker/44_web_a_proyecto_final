import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { api } from './api'

export const PrivateRoute = ({children}) => {

  const [auth, setAuth] = useState(null)

  useEffect(() => {
    
    const checkAuth = async () => {
      try {
        await api.get("/profile")
        setAuth(true)
      } catch (error) {
        console.log(error)
        setAuth(false)
      }
    }

    checkAuth()
    
  }, [])

  if( auth === null ) return <p>Cargando...</p>
  

  return auth ? children : <Navigate to="/login"/>
}
