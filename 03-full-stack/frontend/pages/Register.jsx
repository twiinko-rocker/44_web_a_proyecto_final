import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { registerRequest } from '../src/api/auth'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

//Esquema

const registerSchema = z.object({
  username: z.string().min(3, "El username debe tener al menos 3 caracteres"),
  email: z.string().email("El email no es válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
})

export const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ 
    resolver: zodResolver(registerSchema) 
  })
  const [registerErrors, setRegisterErrors] = useState()
  const navigate = useNavigate()

  const onSubmit = async (data) => {

    const {username, email, password} = data

    try {
      await registerRequest({username, email, password})
      navigate("/profile")
    } catch (error) {
      console.log(error)
      setRegisterErrors(error.response.data.message)
    }

  }

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        {registerErrors && <p className='text-danger text-center'>{registerErrors}</p>}
        <h1 className='mb-4' >Registro</h1>
        <form className='w-25' onClick={handleSubmit( onSubmit )}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              {...register( "username" , { required: "El username es requerido" } )}
            />
            {errors.username && (
              <div className='text-danger'>{errors.username.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              {...register( "email" , { required: "El email es requerido" } )}
            />
            {errors.email && (
              <div className='text-danger'>{errors.email.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register( "password" , { required: "El password es requerido" } )}
            />
            {errors.password && (
              <div className='text-danger'>{errors.password.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">Registrarse</button>
        </form>

        <p className='mt-3'>Ya tienes cuenta? <Link className='btn-link' to="/login">Inicia sesión</Link></p>
      </div>
    </div>
  )
}
