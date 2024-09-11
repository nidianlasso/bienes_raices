import {check, validationResult} from 'express-validator'
import Usuario from '../models/Usuario.js'

const formularioLogin = (req, res) =>{
    res.render('auth/login', {
        pagina: "Iniciar sesión"
    })
}

const formularioRegistro = (req, res)=>{
    res.render('auth/registro', {
        pagina: "Crear cuenta"
    })
}

//HACER EL REGISTRO EN LA BASE DE DATOS
const registrar = async(req, res) =>{   
    //VALIDACION DE FORMULARIO
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req)
    await check('email').notEmpty().withMessage('El email es obligatorio').run(req)
    await check('password').isLength({min: 6}).withMessage('El password debe ser de al menos seis caracteres').run(req)
    await check('repetir_password').equals('password').withMessage('La contrasenas no coinciden').run(req)
    let resultado = validationResult(req)
    
    //VERIFICAR SI EXISTEN LOS ERRORES
    if (!resultado.isEmpty()){ // SI EL USUARIO NO TIENE DATOS
        //ERRORES
        return res.render('auth/registro', {//GARANTIZA QUE NO SE EJECUTE MAS EL IF SI NO QUE MUESTRE EL ERROR
            pagina: 'CREAR CUENTA',
            errores: resultado.array() //SE CONVIERTE EL RESULTADO EN UN ARREGLO PARA ITERARLO.
        })
    }

    const usuario = await Usuario.create(req.body);
    res.json(usuario) 
}

const formularioRecuperacionCuenta = (req, res)=>{
    res.render('auth/recuperacion', {
        pagina: "Recuperar Cuenta"
    })
}
export{
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioRecuperacionCuenta
}