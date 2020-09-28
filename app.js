
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const {argv}=require('./config/yargs');
var colors = require('colors');

let comando = argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.red}`))
            .catch(console.log);
        break;

    default:
        console.log('No hay comando');
}

// console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]

