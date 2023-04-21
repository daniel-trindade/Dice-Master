var last_1 = 0, last_2 = 0, last_3 = 0,  n=0;

function rolarDado(sides){

  if(n != sides){
    last_1 = 0;
    last_2 = 0;
    last_3 = 0;
  }

  var num = Math.floor(Math.random() * sides)+1;
  document.getElementById("res" + sides).value = num;

  lastDice(num, sides);

  n = sides;
}

function lastDice(num, sides){
  last_3 = last_2;
  last_2 = last_1;
  last_1 = num;

  document.getElementById("lastRoll"+sides).value = "Últimos Resultados: "+ last_1+", "+last_2+", "+last_3+"...";
}