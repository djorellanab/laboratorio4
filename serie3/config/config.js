const analisis ={
    alias:  'a',
    demand: true,
    desc: "path donde se encuentra el archivo a leer"
};

const argv = require('yargs')
    .command('analizar', 'Escribir el path del archivo ha analizar',{analisis} )
    .help()
    .argv;

 let getComando = () => argv._[0];

 module.exports = {argv, getComando}