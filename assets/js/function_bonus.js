// les différentes variables:
// est un compteur de clicks du bouton 'Jouer !', serve pour limiter le nombre des tentatives
let counterOfGuess = 0;
// stock le tableau créé avec chaque nouveau nombre entré. Se remet à 0 en appuyant sur le bouton 'Reset'
let countEachNumber = document.getElementById('count_times');


// le chiffre au hasard
function displayRandomNumber(){
  displayRandomAnswer = Math.floor(Math.random() * 101);
  console.log("Le chiffre au hasard: " + displayRandomAnswer);
}
// Le chiffre au hasard est appeller à chaque chargement de la page
window.onload = displayRandomNumber();
// Jouer avec les touches de clavier
function createArray(event){
  var x = event.keyCode;
  if (x == 13) {
    event.preventDefault();
    counterOfGuess++;
    if(counterOfGuess > 5) {
      document.getElementById("demo").innerHTML = "vous avez epuisé vos tentatives, le chiffre est " + displayRandomAnswer;
      return;
    }
    let answers = [];
  // une variable vide qui va servir plus tard
    let myNumber = '';
    myNumber = answers.push(document.getElementById("your_number").value);
    countEachNumber.innerHTML = answers;
    answers.forEach(compareItem);
    function compareItem(item){
      if(isNaN(item) || (item < 0) || (item > 101)){
        document.getElementById("demo").innerHTML = "Entrez un nombre valide";
        countEachNumber.style.display = "none";
      }else{
        countEachNumber.style.display = "block";
        if(item < displayRandomAnswer){
          document.getElementById("demo").innerHTML = "trop petit";
        }else if(item > displayRandomAnswer){
          document.getElementById("demo").innerHTML = "trop grand";
        }
        else if(item == displayRandomAnswer){
          document.getElementById("demo").innerHTML = "bravo ! Vous avez deviné avec : " + counterOfGuess++ + " essais.";
        }
      }
    }
  }
}
  function resetCounter(){
    document.getElementById('formId').reset();
    document.getElementById('paragraph_hidden').innerHTML  = "";
    document.getElementById('demo').innerHTML  = "";
    countEachNumber.innerHTML = "";
    answers = [];
    displayRandomNumber();
    counterOfGuess = 0;
  }
