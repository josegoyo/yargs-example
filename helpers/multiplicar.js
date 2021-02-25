let fs = require('fs');
var colors = require('colors');

const crearArchivo = (base = 5, listar, hasta) => {

    return new Promise((resolve, reject) =>{

        try {
            
            let salida = '';
            for(let i = 1; i <= hasta; i++){
                salida += `${base} x ${i} = ${base*i} \n`;
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            if(listar){
                console.log('========================');
                console.log('TABLA DEL:', base);
                console.log('========================');
                console.log(salida.rainbow);
                console.log('========================');
            }

            resolve(`Todo salio bien, archivo creado tabla-${base}.txt`);

        }catch(err){
            throw reject('Error al crear el archivo', err);
        }

    });
    
}

module.exports = {
    crearArchivo
}