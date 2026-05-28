import { useEffect, useState } from "react"
import { api } from "../api"

export const ListaAlumnos = () => {

  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    
    api.get("/").then( res => setAlumnos(res.data) )
  
  }, [alumnos])
  

  return (
    <div>
      <h2>Lista de alumnos</h2>
      <ul>
        {
          alumnos.map( alumno => (
            <li key={alumno._id} >{alumno.nombre} - Grupo: {alumno.grupo}</li>
          ) )
        }
      </ul>
    </div>
  )
}
