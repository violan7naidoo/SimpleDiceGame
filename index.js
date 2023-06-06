var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + randomNumber1 + ".png"; 

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
console.log(randomImageSource);
//=================================================================================

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 

var randomSource2 = "images/dice" + randomNumber2 + ".png";

console.log(randomSource2);

document.querySelectorAll("img")[1].setAttribute("src", randomSource2);
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
