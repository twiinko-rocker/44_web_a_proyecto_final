import { useAuth } from "../src/context/AuthContext"

export const Profile = () => {

  const { user, logout } = useAuth() //para actualizar el estado del usuario al hacer login

  return (
    <div>
      <h1>Perfil:</h1>
      {
        user ? (
          <div>
            <p>Nombre: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={logout}>Cerrar sesión</button>
          </div>
        ) : (
          <p>Cargando perfil...</p>
        )
      }

    </div>
  )
}
