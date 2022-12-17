const fs = require('fs');
const colors = require('colors');




const crearArchivo = async (tabla, listar = false, hasta = 10 ) => {
    try {
        
        let salida = '';
        for(let i = 1; i <= hasta; i++)
        {
            
        salida += `${tabla} x ${i} = ${tabla *  i}\n`;
        }
        if(listar){
        console.log('================================');
        console.log(`       Tabla del : ${tabla}`)
        console.log('================================')
        console.log(salida.rainbow);
        }
      fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida); 

     return `tabla-${tabla}.txt`;
    } catch (err) {
            throw err;
    }

     
}

module.exports = {crearArchivo};