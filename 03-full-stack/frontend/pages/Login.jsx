import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { loginRequest } from "../src/api/auth"
import { useState } from "react"


export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loginErrors, setLoginErrors] = useState()
  const navigate = useNavigate()

  const onSubmit = async (data) => {

    const { email, password } = data

    try {
      await loginRequest({email, password})
      navigate("/profile")
    } catch (error) {
      console.log(error)
      setLoginErrors(error.response.data.message)
    }

    console.log("Datos enviados:", data)
  }

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        {loginErrors && <p className="text-danger text-center">{loginErrors}</p>}
        <h1 className='mb-4' >Login</h1>
        <form className='w-25' onClick={handleSubmit(onSubmit)}>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              {...register("email", { required: "El email es requerido" })}
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
              {...register("password", { required: "El password es requerido" })}
            />
            {errors.password && (
              <div className='text-danger'>{errors.password.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <p className='mt-3'>No estás registrado? <Link className='btn-link' to="/register">Regístrate</Link></p>
      </div>
    </div>
  )
}
