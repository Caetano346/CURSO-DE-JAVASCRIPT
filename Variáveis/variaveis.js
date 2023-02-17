/* Vamos entender Variáveis
Variáveis são "reciopientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar variáveis:
--> var    pode reatribuir valores!
--> let
--> const
*/



// Início da Aula abaixo:

//var pote = "Bombom"
//alert(pote);

// var a=2; var b=3; var c=a+b; alert(c);

//DECLARAÇÃO DE VARIÁVEIS
// var a,b,c;

//ATRIBUIÇÃO DE VALORES
// a=2;   b=3;   c=a+b;

// alert(c);



/////////////////////////////////////////////////////////////////////////////////////////////////////



/* segunda parte da aula:

//DECLARAÇÃO DE VARIÁVEIS
var nome, sobrenome, nomeCompleto, soma;
//ATRIBUIÇÃO DE VALORES
nome ="João";
sobrenome ="Caetano";
idade = 30;
nomeCompleto = nome + " " + sobrenome;
// document.getElementById("texto").innerHTML = nomeCompleto;

soma = idade + 10;
pessoa = nome + " " + soma

document.getElementById("texto").innerHTML = pessoa;

*/



/////////////////////////////////////////////////////////////////////////////////////////////////////



/* terceira parte da aula:

let pessoa = "Dimitri";
// let pessoa - "João";    O let não permite redeclaração de uma variável!

document.getElementById("texto").innerHTML = pessoa;

*/



/////////////////////////////////////////////////////////////////////////////////////////////////////



/*
 var x = 10;  // aqui é 10

{
     var x = 2;  // aqui é 2
}

// aqui também vai ser 2
document.getElementById("texto").innerHTML = x;
*/



/////////////////////////////////////////////////////////////////////////////////////////////////////



/*
let x = 10;  // aqui é 10

{
    let x = 2;  // aqui é 2
}

// aqui vai ser 10 porque a pergunta está no bloco de fora!
document.getElementById("texto").innerHTML = x;
*/



/////////////////////////////////////////////////////////////////////////////////////////////////////



/*
const x = 10;  // aqui é 10

{
    const x = 2;  // aqui é 2
}

// aqui vai ser 10 porque o const não muda nem se a pergunda for feita dentro de outro bloco!
document.getElementById("texto").innerHTML = x;
*/