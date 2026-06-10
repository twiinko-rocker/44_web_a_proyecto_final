import { body } from 'express-validator'


export const registerValidator = [

    body("username")
        .notEmpty()
        .withMessage("El username es requerido")
        .isLength({ min: 3 })
        .withMessage("El username debe tener al menos 3 caracteres"),

    body("email")
        .notEmpty()
        .withMessage("El email es requerido")
        .isLength({ min: 6 })
        .withMessage("El email debe tener al menos 6 caracteres"),

    body("password")
        .notEmpty()
        .withMessage("La contraseña es requerida")
        .isLength({ min: 6 })
        .withMessage("La contraseña debe tener al menos 6 caracteres"),
]

export const loginValidator = [
    body("email")
        .notEmpty()
        .withMessage("El email es requerido")
        .isEmail()
        .withMessage("El email no es válido"),

    body("password")
        .notEmpty()
        .withMessage("La contraseña es requerida")
        .isLength({ min: 6 })
        .withMessage("La contraseña debe tener al menos 6 caracteres"),
]