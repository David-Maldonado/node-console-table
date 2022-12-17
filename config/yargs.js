const { options } = require('yargs')
const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption:true,
    describe: 'Es la base de la tabla de multiplicar'
    
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default:false,
    describe: 'Muestra la tabla en consola'
    
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default:10,
    describe: 'Muestra el limite de hasta donde multiplicar en consola'
    
})
.check((argv, options) => {
    if( isNaN(argv.b)){
        throw 'La base debe ser un numero'
    }
    //si no hay ningun error
    return true;
})
.check((argv, options) => {
    if( isNaN(argv.h)){
        throw 'Hasta debe ser un numero'
    }
    //si no hay ningun error
    return true;
})
.argv;

module.exports  = argv;