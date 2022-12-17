const crearArchivo = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
crearArchivo.crearArchivo(argv.b, argv.l, argv.h).then(data => {
        console.log(`Todo salio bien: ${data.rainbow}`);
}).catch((err)=>{
    console.log(`Hubo un error: ${err}`);
})



