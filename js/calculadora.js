(function(){

 function comprobar() {
   if (Math.abs(calculadora.display.value)) {
     return calculadora.display.value;
   } else {
     return Math.abs(calculadora.display.value);
   }
 }

  function resultado() {
    calculadora.display.value = eval(calculadora.display.value);
  }
})();
