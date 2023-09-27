/* Funções são utilizadas para a criação de uma sequencia de operações
para o funcionamento.

Ex: let olaMundo = function(){
    console.log("Olá mundo");
    console.log("Olá mundo again");
    console.log("Olá mais uma vez");
}

olaMundo();

é necessario está entre parênteses para que possa funcionar.

Pode chamar direto a função sem precisar colocar o function

Ex: Ex: let olaMundo(){
    console.log("Olá mundo");
    console.log("Olá mundo again");
    console.log("Olá mais uma vez");
}

olaMundo();

Podemos passar valores para a função acessar.

Ex: let somar = function(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado);
}

somar(1,2);
somar(4,4);
somar(99,1);

E temos o teremos o return, que vai devolver o valor da função
o retunr vai para a função e devolver o valor.
Ex:

let soma = function(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}

Temos o subtrair que vai fazer a subtração dos valores e vai exibir no
console e devolvera a subtração dos valores.

let subtrair = function(valor1, valor2){
    let resultado = valor1 - valor2;
    return valor1 - valor2;
}

estes não serão executados corretamente.

let soma = function(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(1);
}

let subtrair = function(valor1, valor2){
    valor2 = valor2 + 5;
    resultado = valor1 - valor2;
    valor1 = 1;
}


*/