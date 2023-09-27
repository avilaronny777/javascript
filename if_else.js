/* O if (se) é o comando que permite executar um código apenas 
uma condição entre parênteses for verdadeura. (true). */
 //ex:
let x =1;
if(x == 1){
    //executa o codigo
}

let disponivel = true;
let quantidade = 5;

if (quantidade > 0 && disponivel){
    console.log("produto disponivel para a venda");
}

/* o comando ELSE (se não) serve para executamos um trecho de codigo
quando o IF for falso. */

// ex:

if (nome == "Maria"){
    console.log("acesso permitido!")
}else{
    console.log("acesso negado!")
}

/* IF ELSE IF ELSE: caso possua muitas condições, pode ficar um pouco
dificil de ler o código. */

//ex:

if(cidade == "porto alegre"){
    // codigo
}else{
    if(cidade == "São Paulo"){
    // codigo
    }
        else{
            if(cidade == "Rio de Janeiro"){
            // codigo
        }
    }
}

/* ELSE IF: Em casos como o anterior, é interessante usar o comando
ELSE IF (senão se). */

// ex:

if (cidade =="porto alegre"){
    // codigo
}else if (ciade == "sao paulo"){
    //codigo
}else if (cidade == "rio de janeiro"){
    //codigo
} else{
    //codigo
}