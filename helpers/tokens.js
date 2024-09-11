const generarId = () =>Math.random().toString(32).substring(2)+ Date.now().toString(32); //GENERA UN TOKEN RANDOM PARA VALIDAR AL USUARIO

export {generarId}