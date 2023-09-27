/* For: o for é utilizado para executar X vezes uma ação seguindo a forma
como foi definido para ele fazê-la.

ex:*/

for (let i = 0; i < 10; i++){
    console.log(i);
}

/* a intrução de execução do for é dividida em 3 partes separadas por ";"

1º instrução ocorrerá quando for iniciar. Normalmente é a criação de uma veriável de controle.
ex: */

for     (let i = 0; i      < 10; i++){
// o i será usado para controlar o numero de vezes que sera executado o console.log(i).
    console.log(i);
}

// 2º condição é para encerrar o for. neste casi, ele vai executar enquanto i for menor que 10.

for (let i = 0;           i < 10;            i++){
// caso ela nuca seja 'false', ela sera um loop infinito até o navegador não suportar mais.
    console.log(i);
}

//3º o final é de cada repetição. Normalmente o incremento é de 1 da variável.
for (let i = 0; i < 10;         i++          ){
    console.log(i);
}

// utilidade: além de executar uma instrução verias vezes, ele é perfeito para ler vetores.

let lista = ["cachorro", "gato", "galinha"];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

// tbm podemos modificar todos os itens de um vetor.

let valores =[1,2,3,4,5];

for(let i = 0; i < valores.length; i++){
    valores[i] = valores[i] * 2;
    console.log(valores[i]);
}

// temos loops melhores para outros casos que podem ser melhores.

let o = 5;
for(; o < 10; o ++){
    console.log(o);
}

let u = 3;
for(; u < 10; ){
    console.log(u);
    u = u + 2;
}

let y = 3;
let x = 0;
for(;; ){
    console.log(y);
    y = y + 2;
    x = y/2;
    if (x > 20){
        break;
    }
}

// FOR OF: este loop é especifico para iterar entre os elementos de uma lista.

let dias = ["segunda", "terça", "quarta", "quinta", "sexta"];
for(let dia of dias){
    console.log(dia);
}

// percorrer a lista em ordem crescente é o coração do for of.
// caso vc precise trabalhar com índices ou múltiplas posições da lista, talvez seja melhor usar o for normal.

// WHILE: este loop funciona de uma forma simple, enquanto (while) a condição for true, vai executar o codigo 

let num = 1;
while(num < 10 ){
    console.log("valor:" + num);
    num = num + 2;
}

// temos que fornecer uma forma para que o loop termine, caso contrario vamos ter um loop infinito.

let num = 1;
while(num < 10 ){
    console.log("valor:" + num);
    num = num - 2;
}

// aqui vamos ter um loop infinito 

// DO WHILE: similar ao while, ele é usado para executar um techo de codigo e depois testar se ele vai executar novamente.

let num = 1;
do{
    console.log(num);
    num++;
}
while (num < 10);

// break: é um comando que podemos usar para parar na hora

for (let numero of [1,2,3,4,5,6,7,8,9]){
    console.log(numero);
    if(numero == 5){
        break;
    }
}

// ou 

let num = 1;
while(num < 10){
    console.log(num);
    if(num == 6){
        break;
    }
    num++;
}

// CONTINUE: com este comando, é possivel iniciar a proxima repitição do loop.

for(let numero of [1,2,3,4,5,6,7]){
    if(numero == 5 || numero == 7){
        continue;
    }
    console.log(numero);
}

// aqui não vai acontecer nada, pq quando o nmero chegar até 5, ele vai continuar até chegar no 7. como não tem nada após o 7, não vai imprimir nada.