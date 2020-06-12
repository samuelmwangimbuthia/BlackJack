//Handling a multiplayer button click event

multiPlayerButton.addEventListener('click', function(){
  gameStarted=true;
  gameOver =false;
  playerWon = false;

  deck= createDeck();
  shuffleDeck(deck);
  dealerCards=[getNextCard(),getNextCard()];
  playerCards =[getNextCard(),getNextCard()];

  singlePlayerButton.style.display = 'none';
  multiPlayerButton.style.display = 'none';
  hitButton.style.display= 'inline';
  stayButton.style.display= 'inline';
  dealerImageSection.style.display = 'inline';
  playerImageSection.style.display = 'inline';

  showStatus();

});


let newFigure = document.createElement("figure");
//console.log(newFigure);
newFigure.setAttribute("id","multiPlayerCardImages");
let multiPlayerImageArea = document.getElementById("multiPlayerCardImages");
//Document.body.appendChild(newFigure);
