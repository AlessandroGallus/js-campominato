function selezioneDifficolta(){
  var numero_opzioni = 0;
  var difficolta=prompt("Inserisci 0 se vuoi giocare in facile, 1 se vuoi giocare in normale e 2 se vuoi giocare in difficile");
   if(difficolta == 0){
    numero_opzioni = 100;
  }else if(difficolta == 1){
    numero_opzioni = 80;
  }else if(difficolta == 2){
    numero_opzioni = 50;
  }else{
    console.log("mi sono offeso e ora mi chiudo da solo");
    scelta=0;
  }

  return(numero_opzioni);
}
function generazioneBombs(){
  var numero_opzioni = difficolta;
  var possibilie_bomba = true;
  var array_Bombs =[];
  var i = 0;
  console.log(numero_opzioni)
  while (array_Bombs.length<16){
    ordigno_inesploso = Math.ceil(Math.random()*numero_opzioni);
    
    if (array_Bombs.includes(ordigno_inesploso) === false){
      array_Bombs.push(ordigno_inesploso)
    }
  }
  console.log(array_Bombs)
  return (array_Bombs);
}
function gioco(){
  var end_game=false;
  var cicli = 1;
  var array_Bombs = generazioneBombs();
  var array_numeri = [];
  var numero_scelto= 0;

  while (end_game==false){
    numero_scelto = parseInt(prompt("inserisci il numero"))

    if (array_Bombs.includes(numero_scelto) == true){
      alert("mi dispiace, hai perso in quanto nella tua ultima scelta c'era una bomba; hai perso per colpa del numero " + numero_scelto + " dopo " + cicli + " tentativo/i")
      end_game = true;  
    }else if(array_numeri.includes(numero_scelto) == true){
      alert("attenzione, il numero inserito è già stato utilizzato")
    }else if (numero_scelto>difficolta){
      alert("inserisci un numero minore di " + difficolta)
    } else if (numero_scelto<1){
      alert("inserisci un numero maggiore di 0")
    } else if(isNaN(numero_scelto)== true){
      alert("inserisci un NUMERO")
    }else {
      array_numeri.push(numero_scelto);
      cicli++;
    }

    if (array_numeri.length == (difficolta-16)){
      alert("Congratulazioni, hai vinto; queste erano le bombe: " + array_Bombs)
      end_game = true;
    }
  }

}
  var difficolta = selezioneDifficolta()
  generazioneBombs();
  gioco();
