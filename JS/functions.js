function store(){

  var name = document.getElementById('name');
  var pw = document.getElementById('pw');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if(name.value.length == 0){
      alert('Please fill in email');

  }else if(pw.value.length == 0){
      alert('Please fill in password');

  }else if(name.value.length == 0 && pw.value.length == 0){
      alert('Please fill in email and password');

  }else if(pw.value.length > 8){
      alert('Max of 8');

  }else if(!pw.value.match(numbers)){
      alert('please add 1 number');

  }else if(!pw.value.match(upperCaseLetters)){
      alert('please add 1 uppercase letter');

  }else if(!pw.value.match(lowerCaseLetters)){
      alert('please add 1 lowercase letter');

  }
  // else if (userExixts(name.value))
  // {
  //   alert('the user already exists');
  // }
   else{
    const userName = document.getElementById('userName').value;
    const userPw = document.getElementById('userPw').value;
    
    if (localStorage.getItem('name') == null && localStorage.getItem('pw') == null){
      localStorage.setItem('name', '[]');
      localStorage.setItem('pw', '[]');
    }

    var storedName = JSON.parse(localStorage.getItem('name'));
    var storedPw = JSON.parse(localStorage.getItem('pw'));



    var storedName = JSON.parse(localStorage.getItem('name'));
    var storedPw = JSON.parse(localStorage.getItem('pw'));

    storedName.push(userName);
    storedPw.push(userPw);

    localStorage.setItem('name', JSON.stringify(storedName));
    localStorage.setItem('pw', JSON.stringify(storedPw));

      // localStorage.setItem('name', name.value);
      // localStorage.setItem('pw', pw.value);
      alert('Your account has been created');
  }
}

function userExixts(n) {

  const storedName = localStorage.getItem('name');
  console.log(JSON.parse(storedName));

  let names; //names array

  if (storedName === null) {
    return false; //local storage is empty
  }
  else {
    names = JSON.parse( storedName ); //read all the names from localstorage to names array
  }

  for (i in names) {
    if (n == i)
      console.log(n);
      return true; //if name is found in the storage return true
  }

  return false;
}


//checking
function check(){
  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');
  // var userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw){
      // alert('You are logged in.');
      // window.location.href="play.html";
       document.location.href="../src/play.html";
      return true;
  } else{
      alert('Error on login');
  }
}


/*        here The game begin */
/*========================================================================*/

const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

// game constants
const xSymbol = 'X';
const oSymbol = 'O';

// game variables
let gameIsLive = true;
let xIsNext = true;


// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];

  // check winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};


// event Handlers
const handleReset = () => {
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} is next`;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive = true;
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext) {
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }
};


// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick)
}
