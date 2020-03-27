//
// BlackJack
// by Samuel Mwangi Mbuthia
//

// Card Variables
let suits = ['Hearts','Clubs','Diamonds','Spades'],
    values = ['Ace','King','Queen','Jack','Ten','Nine','Eight','Seven','Six','Five','Four','Three','Two'];

//DOM Variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//Game Variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards =[],
    playerCards =[],
    dealerScore =0,
    playerScore =0,
    deck = [];

//To hide the hit and stay buttons at the start of the game
hitButton.style.display= 'none';
stayButton.style.display= 'none';

showStatus();

//Handling a button click event NB. Function doesn't require a name
newGameButton.addEventListener('click', function(){
  gameStarted=true;
  gameOver =false;
  playerWon = false;

  deck= createDeck();
  shuffleDeck(deck);
  dealerCards=[getNextCard(),getNextCard()];
  playerCards =[getNextCard(),getNextCard()];
  
  newGameButton.style.display = 'none';
  hitButton.style.display= 'inline';
  stayButton.style.display= 'inline';

  showStatus();

});

//creates deck when we hit new game
function createDeck(){
 let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for(let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
      let card = {
        suits:suits[suitIdx],
        values:values[valuesIdx]

      };
      deck.push(card);
    }
  }    
  return deck; 
}; 

//shuffle deck
function shuffleDeck(deck){
  for(let i= 0; i<deck.length; i++){
    let swapIdx = Math.trunc(Math.random()*deck.length); //calculate the index to swap with
    let tmp =deck[swapIdx]; //temporarily hold on to deck swap index
    deck[swapIdx]=deck[i]; //swap deck i with deck swap index
    deck[i]=tmp;  
  }
}
//function to print out the card
function getCardString(card){
  return card.values + ' of ' + card.suits
};

//to get the next card in the deck
  function getNextCard(){
    return deck.shift();
  };
function getCardNumericValue(card){
  switch(card.values){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }

}
 
function getScore(cardArray){
  let score = 0;
  let hasAce =false;
  for (let i=0; i<cardArray.length; i++){
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if(card.value === 'Ace'){
      hasAce = true;
    }
  }
  if(hasAce && score + 10 <= 21){
    return score + 10;
  }
  return score;
}
function updateScore(){
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function showStatus(){
  if (!gameStarted) {
    textArea.innerText = 'Welcome to BlackJack!';
    return;
  }
  //calculating the score
  let dealerCardString ='';
  for(let i=0; i<dealerCards.length; i++){
    dealerCardString+=  getCardString(dealerCards[i])+ '\n'; //to get dealt cards on separate lines
  }

  let playerCardString ='';
  for(let i=0; i<playerCards.length; i++){
    playerCardString+=  getCardString(playerCards[i])+ '\n'; //to get dealt cards on separate lines
  }

  updateScore();

  textArea.innerText =
   'Dealer has: \n' +
   dealerCardString +
   '(score: '+dealerScore + ')\n\n' + //to show them on a separate paragraph---break
  
   'Player has: \n' +
   playerCardString +
   '(score: '+playerScore + ')\n\n' //to show them on a separate paragraph---break
  
  if(gameOver){
    if(playerWon){
      textArea.innerText +='YOU WIN!';
    } else {
      textArea.innerText += 'DEALER WINS!';
    }
    newGameButton.style.display = 'inline';
    hitButton.style.display= 'none';
    stayButton.style.display= 'none';    
  }

}
/*

// variable that holds the player cards
let playerCards = [getNextCard(), getNextCard() ]; 
let salesTax;

console.log('Welcome to BlackJack');
console.log('You are dealt:');

//call the getStringCard function
console.log(' '+getCardString(playerCards[0]) );
console.log(' '+getCardString(playerCards[1]) );
 */
