const  {argv, getComando} = require('./config/config');
const  {analizarCadena} = require('./dominio/analizar');
const fs = require('fs');

let comando = getComando();

switch(comando)
{
    case "analizar":
    {
        console.log(argv.analisis);
        var contents = '';
        try {
            contents = fs.readFileSync(argv.analisis, 'utf8');
            analizarCadena(contents);
        } catch (error) {
            console.log(error);
        }
        break;
    }
    default:
    {
        console.log("Acción no válido");
        break;
    }
}