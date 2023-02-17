var n1 = Number(prompt('Digite um número'))
var n2 = Number(prompt('Digite outro número'))

s = n1+n2

console.log(s)

nome = 'João' 
idade = 15
nota = 8.8

console.log(`O aluno ${nome} com ${idade} anos de idade tirou ${nota} de nota na prova!`)

y = 'O aluno João com 15 anos de idade tirou 8.8 de nota na prova!'

console.log(y.length)

console.log('O aluno ' + nome + ' com ' + idade + ' anos de idade tirou ' + nota + ' de nota na prova')


/* 

var nome = prompt('Qual é o seu nome?')
        document.write(`Olá, <strong>${nome}</strong>. Seu nome tem ${nome.length} letras.<br>`)
        document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}.<br>`)
        document.write(`Seu nome em letras minúsculas é ${nome.toLowerCase()}`) 
        
*/


var nome = prompt('Qual é o seu nome?')

      console.log(`Olá, ${nome}. Seu nome tem ${nome.length} letras.`)
      console.log(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}.`)
      console.log(`Seu nome em letras minúsculas é ${nome.toLowerCase()}`) 

/* 

var n1 = 1545.5
  
n1.toFixed(2)

n1.toFixed(2).replace('.', ',')

n1.tolocaleString('pt-BR', {style: 'currency', currency: 'BRL})

n1.tolocaleString('pt-BR', {style: 'currency', currency: 'USD}) 

n1.tolocaleString('pt-BR', {style: 'currency', currency: 'EUR}) 

*/