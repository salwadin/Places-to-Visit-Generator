var Topsights = [ "New York,United States" , "Seattle,United States", "Tokyo,Japan" , "Seoul,South Korea" , "Mumbai,India" , "Paris,France" ,  "Venice,Italy" , "Rome,Italy" , "Milan,Italy" , "London,United Kingdom" , "Dubai,United Arab Emirates" , "Hong Kong,China" ];



 var button = document.getElementById("Topsights");

button.addEventListener("click" , function() {
  var randomTopsights= Math.random ();
  var randomTopsightsBig= randomTopsights * Topsights.length
  var randomRound= Math.floor(randomTopsightsBig);
  console.log (randomTopsights);
  console.log(randomTopsightsBig);
  console.log(randomRound);
  console.log(Topsights [randomRound]);
   document.getElementById("placeholder").innerHTML= Topsights[randomRound];

 })


//  var button2= document.getElementById("example")
//
//
// button2.addEventListener ("click", runSomething );
//
// function runSomething (){
//   document.getElementById("hello").innerHTML = "BOOO!!!!"
//   if (document.getElementById(("hello")))
// }
