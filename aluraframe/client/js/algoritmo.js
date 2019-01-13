// Exe. 3.17
let numeros = [3,2,11,20,8,7];
let numeros2 = [];

for(let i = 0; i <= numeros[i]; i++) {
    if(numeros[i] % 2) {
        numeros2[i] = numeros[i] * 2;
    } else {
        numeros2[i] = numeros[i];
    }
}

//console.log(numeros2);


// Exe. 3.17 Refatoracao
let numeros = [3,2,11,20,8,7];
let numeros2 = numeros.map((item) => {            
    if (item % 2) {
        item = item * 2; 
        return item;
    }; 

    return item;
})

//console.log(numeros2);


// Exe. 4.9
function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];

listaDeNomes1.push(...listaDeNomes2);
exibeNoConsole(listaDeNomes1);

// alternativa let lista = [...listaDeNomes1,...listaDeNomes2];