import { useForm } from 'react-hook-form'

export const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <h1 className='mb-4' >Registro</h1>
        <form className='w-25'>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>
      </div>
    </div>
  )
}
