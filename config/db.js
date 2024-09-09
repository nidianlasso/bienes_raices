import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({path: '.env'});

const db= new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASSWORD, {
    host: process.env.BD_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps:true //CUANDO SE REGISTRA UN USUARIO GUARDA EN LA BASE DE DATOS CUANDO Y AQUÉ HORA FUE AUTOMÁTICAMENTE
    },
    pool: {
        max: 5, //MAXIMOS CONEXIONES POR USUARIO
        min: 0, //CUANDO NO HAYA CONEXIÓN AHORRE RECURSOS
        acquire:30000, //TIEMPO QUE TARDA EN MOSTRAR UN ERROR DE LA CONEXIÓN
        idle: 10000
    }
});

export default db;