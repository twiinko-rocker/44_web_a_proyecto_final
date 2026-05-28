import { FormularioAlumno } from "./components/FormularioAlumno"
import { ListaAlumnos } from "./components/ListaAlumnos"


export const App = () => {
  return (
    <div>
      <h1>Aplicación de gestión de alumnos</h1>
      <ListaAlumnos />
      <FormularioAlumno/>
    </div>
  )
}
