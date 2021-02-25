const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
//console.log("Base ingresado:", argv.base, 'Listar Ingresado', argv.listar);

const { base, listar, hasta} = argv;

crearArchivo(base, listar, hasta)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => { console.log(err) });