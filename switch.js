/* SWITCH: O switch serve para executar um codigo de acordo com diversos
possiveis resultados.
*/

//ex:

switch (codigo) {
    case 50:
        console.log("Banana");
        break;
    case 9540:
        console.log("Limão");
        break
    default:
        console.log("Erro");
        break;
}

// é uma alternativa perfeita pra ao if e else em casos de comparações.

/* CASE: como vc pode ver ono exemplo abaixo, para case possibilidade, 
é necessario termos uma case.
*/

// ex:

switch (codigo) {
    case 50:
        console.log("maça");
        break;
    case 9540:
        console.log("cereja");
        break
    default:
        console.log("Desconhecido");
        break;
}

// o break serve para encerrar uma leitura do switch. sem ele o codigo
// case abaixo sera executado.