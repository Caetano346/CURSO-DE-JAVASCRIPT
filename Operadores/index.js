var valor1, valor2, total
valor1 = 5
valor2 = 2

/* ex1

total = valor1 + valor2

total = ++valor1
//alert(total)
console.log(total)

*/

/* ex2

valor1 += valor2
console.log(valor1)

*/

/* ex3 

valor1 = "João "
valor2 = "Victor"

total = valor1 + valor2
console.log(total)

*/

/* ex4

// Número: ==
   Tipo: ===
   Diferente: !=  
   e !== para tipo tbm

// Menor: < e  
   Maior: >  
   ou igual: <= >=

total = (valor1 === valor2);
console.log(total);

*/

var idade, eleitor, resultado
idade=65
eleitor=(idade<18) ? "Não Eleitor":"Sim, Eleitor"
console.log('A resposta é: ' + eleitor + ' a idade dele é de: ' + idade)

/*
resultado = (idade > 60 && idade < 70)
*/

resultado = /*!*/(idade===65 || idade===72)

alert(resultado)