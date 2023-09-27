/* For é um comando utilizado X vezes uma ação seguindo a forma como 
foi definido para ele fazer.

ex:
*/

for (let i = 0; i < 10; i ++){
    console.log(i);
}

let lista = ["cachorro", "gato", "galinha"];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

// OU PODEMOS MODIFICAR TODOS OS ITENS DE UM VETOR.
// ex:

let valores = [1, 2, 3, 4, 5];
for (let u = 0 u < valores.length; u ++){
    valores[u] = valores[u] * 2;
    console.log(valores[u]);
}

//OBS: note que os passos padro~es são opcionais. Mas caso queira executar 
// de outra forma, exitem loops melhores para isso.

let o = 5;
for (; o < 10; o++){
    console.log(o);
}

let p = 3;
for (; p < 10; ){
    console.log(p);
    p = p + 2;
}

let y = 3;
let x = 0
for (; ;){
    console.log(i);
    i = i + 2;
    x = i/2;
    if (y > 20){
        break;
    }
}