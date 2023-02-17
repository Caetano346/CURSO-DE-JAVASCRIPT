

//  BÁSICO DO JS
// document.getElementById("texto-js").innerHTML = "Oi pessoas!"


//---------------------------------FUNCÕES--------------------------------------


/*---------------------------------FUNÇÃO DE SOMA-------------------------------


function soma(valor1, valor2) {
  return valor1 +valor2
}

document.getElementById("texto-js").innerHTML = soma(10, 23)

*/



/*---------------------------------FUNÇÃO DE COTAÇÃO DE DÓLAR-------------------


function realParaDolar(real,cotacaoDolar){
  return real * cotacaoDolar
}

document.getElementById("texto-js").innerHTML = realParaDolar(10, 5.08)

*/



/*---------------------------------FUNÇÃO DE COTAÇÃO DE DÓLAR UM POUCO MAIS AVANÇADO----------------


function valordeRealParaDolar(ValorReal,cotacao){
  return ValorReal * cotacao
}

var valorReal = 7.89
var cotacao = 5.08

total = valordeRealParaDolar(valorReal,cotacao)

alert("O valor em real é R$: "+valorReal+" em dólar U$ é: "+total)

*/



/*-----------------------------------FUNÇÃO ATIVADA ATRAVÉS DE UM BOTÃO--------------------------------


function alertaHello() {
  alert("Olá pessoal")
}


A função pode ser chamada depois: alertaHello()

/*



/*----------------------------------FUNÇÃO PARA GRAUS CELSIUS------------------------------------------


function paraCelsius(valorFahrenheit) {
  return (5/9) * (valorFahrenheit-32)
}

var x = paraCelsius(77)

alert("A temperatura é de "+x+" graus celsius")

*/


