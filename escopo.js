/*  O bloco de escopo é definido pela região ao qual variáveis e 
outros dados são visíveis.
*/

// ex:

let numero = 1
if (numero == 1){
    let texto = "ola";
    //acessando a variavel numero
    numero = 2;
}

// erro de escopo
console.log(texto);

/* Escopo global: Uma variavel declarada fora de uma função,
torna-se global e todos os scripts e funções em uma página da web
pode acessá-la.
*/

// ex:

// <script>
    let valor = 12;

    let umaFuncao = function () {
        console.log(valor);
    }

    if (valor == 12){
        umaFuncao();
        console.log(valor);
    }

    // </script>

// Escopo de bloco: variaveis declaradas dentro de um local cercada de {}/

// ex:

let varGlobla = 1;
function funcaoGlobal(){
    let varfuncao = varGlobal + 1;

    function funcaoLocal(){
        let varFuncLocal = varFuncao + varGlobal;
        console,log(varFuncLocal);
    }
}

// so se pode acessar dentro do escopo caso contrario vai dar ERRO!

// VAR: O var so possui escopo global de bloco para funções.

//ex certo:

let x = 1;

if (x == 1){
var y = 99;
}
console.log(y);

//ex errado :

let w = 1;
if (w == 1){
let z = 99;
}
console.log(z);

// aqui vai dar erro pois o let causará um erro causado o escopo.