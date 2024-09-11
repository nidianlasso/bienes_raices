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
    
    const usuario = await Usuario.create(req.body)
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