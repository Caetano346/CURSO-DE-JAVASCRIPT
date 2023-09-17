

//-----------------------FUNÇÃO DE CLIQUE ÚNICO----------------------------//
function eventoClick(){
    //alert('Acionou um evento de click!')
      document.body.style.backgroundColor = "antiquewhite"
    }
    
    
    //-----------------------FUNÇÃO DE CLIQUE DUPLO----------------------------//
    function eventoDblClick(){
      alert('Evento de clique duplo!')
    }
    
    //-----------------------FUNÇÕES QUANDO O MOUSE É MOVIDO-------------------//
    function viraVermelho(){
      let div = document.getElementById("teste")
      div.style.backgroundColor = "red"
    }
    
    function viraAzul(){
      let div = document.getElementById("teste")
      div.style.backgroundColor = "blue"
    }
    
    function adicionaTexto(){
      let p = document.getElementById("texto")
      p.append('O mouse moveu<br>')
    }
    
    
    //-----------------------FUNÇÕES RELACIONADAS A TEXTO---------------------//
    function limpaTexto(){
      document.getElementById("campoTexto").value = "Texto adicionado"
    }
    
    function mudou(){
      console.log('Mudou')
    }
    
    //----------------------FUNÇÕES RELACIONADAS A TECLAS-----------------------------//
    function teclaPressionada(){
     let = input = document.getElementById("campoTexto").value
      console.log(input)
    
      console.log('Tecla pressionada')
    }
    
    //------------FUNÇÃO PARA SER FEITA NO BODY QUANDO A PÁGINA TERMINA DE SER CARREGADA--------//
     onload="alert('Terminou de carregar')"