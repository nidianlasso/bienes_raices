import {DataTypes} from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../config/db.js';

const Usuario  = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING, //tipo de dato
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false //No puede ser nulo el dato
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false //No puede ser nulo el dato
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
},{
    //HASHEAR EL PASSWORD
    hooks: {
        beforeCreate: async function (usuario) {
            const salt = await bcrypt.genSalt(10) //SE UTILIZA PARA QUE HAGA 10 VECES EL HASHEO AL PASSWORD
            usuario.password = await bcrypt.hash(usuario.password, salt); // LO GUARDA EN LA BASE DE DATOS
        }
    }
})
export default Usuario;