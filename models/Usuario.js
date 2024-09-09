import {DataTypes} from 'sequelize';
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
})
export default Usuario;