import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { logoutRequest, profileRequest } from "../src/api/auth"


export const Profile = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const res = await profileRequest()
        setUser(res.data)
      } catch (error) {
        console.error("Error al cargar el perfil", error)
      }
    }

    fetchProfile()

  }, [])

  const handleLogout = async () => {
    await logoutRequest()
    navigate("/login")
  }


  return (
    <div>
      <h1>Perfil:</h1>
      {
        user ? (
          <div>
            <p>Nombre: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <p>Cargando perfil...</p>
        )
      }



    </div>
  )
}
