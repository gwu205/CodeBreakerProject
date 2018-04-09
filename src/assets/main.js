let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer == "") {
      setHiddenFields();
    }
    if (attempt == "") {
      attempt = 0;
    }
    if (validateInput(input.value) == true) {
      attempt++;
      console.log('test');
    }
    else {
      return false;
    }
}

//implement new functions here
function setHiddenFields() {
  attempt = 0;
  var randomNum = (Math.floor(10000 * Math.random())).toString();
  while(randomNum.length < 4) {
    return randomNum = "0" + randomNum;
  }
  answer.value = randomNum;
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(userGuess) {
  if (userGuess.length == 4) {
    return true;
  }
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
  //document.getElementById('results').innerHTML =
}
