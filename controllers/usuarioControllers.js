
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
const registrar = (req, res) =>{   
    console.log("registro")
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