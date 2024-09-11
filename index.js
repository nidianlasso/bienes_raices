import express from 'express'
import db from './config/db.js'

//IMPORTAR LAS RUTAS DE LOS ARCHIVOS QUE SE VAN A MOSTRAR
import usuarioRoutes from './routes/usuarioRoutes.js'

//CREAR LA APP
const app = express();

//HABILITAR LECTURA DE DATOS DEL FORMULARIO
app.use(express.urlencoded({extended: true}))

//CONEXIÓN A LA BASE DE DATOS
try{
    await db.authenticate();
    db.sync()//Realiza las acciones dentro de la base de datos de forma automática
}catch(error){
    console.error('AQUÍ ESTÁ EL ERROR');
    
    console.error(error);
    
}

//HABILITAR PUG
app.set('view engine', 'pug')
app.set('views', './views')

//CARPETA PUBLICA
app.use(express.static('public'))

//ROUTING => SE REFIERE A LO QUE SE LE ENVIA Y RECIBE EL SERVIDOR 
app.use('/auth', usuarioRoutes)

//MONTAR EL SERVIDOR
const port = 3000;
app.listen(port, () =>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
});