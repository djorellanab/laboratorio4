const pila = [];

let verificar = (caracter) =>{
    if (pila.length===0) {
        throw -1;
    } else {
        let s =  pila.pop();  
        if (caracter !== s) {
            throw -1;
        }
    }
}

let analizarCadena = async (cadena) =>{
    try {
        for (let i = 0; i < cadena.length; i++) {
            const caracter = cadena[i];
            if (caracter === '(') pila.push(')');
            else if (caracter === '{') pila.push('}');
            else if (caracter === '[') pila.push(']');
            else if (caracter == ')') await verificar(')');
            else if (caracter == '}') await verificar('}');
            else if (caracter == ']') await verificar(']');
            else continue;
        }   
        if (pila.length==0)
            console.log("Parentesis balanceados");
        else 
            console.log("Parentesis no balanceados");
    } catch (error) {
        if  (error === -1)
            console.log("Parentesis no balanceados");
        else
            console.log("Hubo un error inesperado: " + error);
    }	
}

module.exports = {analizarCadena}