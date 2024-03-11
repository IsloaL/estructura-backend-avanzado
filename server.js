

/*
require e import son distintos por que require ya quedó deprecado, lo que se debe de usar es import
 "type": "module",  esto es lo que se debe de poner en el package.json*/

/**
 * en lugar de usar: 
 * .then
 * 
 * .catch
 * 
 * se va a emplear:
 * await
 * 
 * async
 * 
 * con su respectivo bloque
 * 
 * try {
    
} catch (error) {
    
}
 */


/**
 * Para crear una app en express necesitamos:
 * 1.- Importar express
 * 2.- Crear app con express (api)
 * 3.- Usar app.listen para abrir puertos
 * agrego esto para prueba
 */


import express from 'express';

const api = express();

api.listen(8000, ()=>{
    console.log('API corriendo en puerto 8000');
})
