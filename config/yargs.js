const argv = require('yargs')
            .option({
                'b':{
                    alias:'base',
                    type:'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla por multiplicar'
                },
                'l':{
                    alias:'listar',
                    type:'boolean',
                    default: false,
                    describe: 'Permite listar la tabla en consola'
                },
                'h':{
                    alias:'hasta',
                    type:'number',
                    default: 10,
                    describe: 'Indica el limite (hasta) de la tabla'
                }
            })
            .check((argv, options) =>{

                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero';
                }else if(isNaN(argv.h)){
                    throw 'El limite (hasta) tiene que ser un numero';
                }else{
                    return true;
                }
                
            })
            .argv;

module.exports = argv;