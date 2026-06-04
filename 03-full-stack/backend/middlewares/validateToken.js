import { config } from 'dotenv'
import jwt from 'jsonwebtoken'

config()

export const authRequired = (req, res, next) =>{
  
  const { token } = req.cookies
  

  if( !token ){
    return res.status(401).json({message: "Autorización denegada"})
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if(err) return res.status(403).json({message: "El token no es válido"})

      console.log(user)

      req.user = user
  } )
 
  next()
}