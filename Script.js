// comentario de uma só linha

/* comentario 
    de
    varias 
    linhas */

/* podemos declarar uma variavel como var. 
Ex: "Var umNumero; ou var umNumero = 10;" 
                    IMPORTANTE!
evitar de usar o var, mais pela boa prática de programação*/

/* usando let vai declarar um escopo de bloco. 
Ex: let outroNumero = 5; */

/* É uma váriavel somente para leitura, que não é possivel mais altera-ló
Ex: const = "Olá mundo!"; */

/* Case-Sensitive 
    O JS diferencia entre letras maiúsculas e minúsculas.
    NOME é diferente de nome.
Ex: let nome = "Paulo"
    let NOME = "Pedro"
*/

/* Underline "_" e cifrão "$"
    São utilizados em qualquer posição e são be, usados nas variáveis 
    de bibliotecas e frameworks.
Ex: let_variavel = 99;
let $WWW = true;
*/

/* Tipos de dados 
Number, String, boolean, array, null e undefined, symbol*, object, function.
*/

/* Number
    são todos os numeros reais.
Ex: let numeroInteiro = 100;
let numeroDecimal = 5.36;
let numeroNegativo = -1.99;
*/

/* Operadores
    Você pode usar +, -, * e / para executar operações basicas.
*/

/* Máximo e mínimo
usado para saber quais são os valores máximos e ~inimos, utilizando o cosole.
Ex: console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
*/

/* Strings
vc pode utilizar aspas simples ou duplas para encapsular a String.
Ex: console.log = "Olá mundo!";
*/

/* para inserir caracteres especiais utilizamos a barra invertida \\
Ex: let caracteresEspeciais = "lorem \n Ipsum \\ dolor \ ' \" amet";
*/

/* Concatenação de Strings: vc pode unir (concatenar) strings de diversas formas.
ex: let ola= "Olá";
let mundo = "Mundo";

let olaMundo = ola+mundo;

podemos utilizar o concat para unir varias variaveis.
Ex: let ola= "Olá";
let mundo = "Mundo";

let olaMundo = ola.concat(mundo);

e tbm permite concatenar diversas strings
Ex: let ola= "Olá";
let mundo = "Mundo";

let olaMundo = ola.concat(mundo, "frase", ola);

e tem o tamplate de  strings que utiliza ${expressao} e a crase ao redor da string.
ex: let ola= "Olá";
let mundo = "Mundo";

let olaMundo = `${ola}, ${mundo} ${1+1}`;
*/

/* Booleanos são tipos de dados que são apenas 2, true e false.
Ex: let verdadeiro = true;
let falso = false'

Comparações são formas de obter valores é através de comparações.

true

let comparacao = 1 == 1;

false

let comparacao2 = 1 > 5;

true

let comparacaoString = "banana" == "banana";

valores

igual "=="
valor e tipos iguais "==="
valor diferente "!="
valor e tipos diferentes de "!=="
menor "<, <="
maior ">, >="
E "&&"
Ou "||"
Não "!"
*/

/* Tipos de array
Temos o array que é uma lista ou colação de dados que pode ser acessada por um índece.
para criar um vetor vazio basta criar uma variável e atribuir um [] a ela.

let vetor = []
let vetor = [1, 2, 3, 4]
let vetor = [1, true, "ola mundo", [1,2,3,4];

para a exibição do vetor podemos usar o 
let vetor = [1, 22, 0, 100]
console,log(vetor[1]);
que vai exibir 22
*/

/* Null ou underfined

Null representa a falta de valor de um dado;
Ex: let x = null;
let y =1
y = null

Underfined é um tipo de dado que tentamos acessar sem ter atribuido algum valor a ele.
Ex: let x;
console.log(x)
*/
