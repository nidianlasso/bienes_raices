import express from 'express'
import {formularioLogin, formularioRegistro, registrar, formularioRecuperacionCuenta} from '../controllers/usuarioControllers.js';
const router = express.Router();

router.get('/login', formularioLogin);

router.get('/registro', formularioRegistro);
router.post('/registro', registrar);

router.get('/recuperacion', formularioRecuperacionCuenta);

export default router;

