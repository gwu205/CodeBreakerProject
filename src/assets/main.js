let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let results = document.getElementById('results');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == "") {
      setHiddenFields();
    }
    if (attempt == "") {
      attempt = 0;
    }
    if (validateInput(input.value) == true) {
      attempt++;
    }
    else {
      return false;
    }

    var result = getResults(input.value);
    if (result == true) {
      setMessage("You Win!!!");
      showAnswer(result);
      showReplay();
    }
    else if (result == false && attempt > 10) {
      setMessage("You Lose!");
      showAnswer(result);
      showReplay();
    }
    else {
      setMessage("Incorrect, try again.");
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
  var recordAttempt = "<div class=\"row\"><span class=\"col-md-6\">" +
  input +
  "</span><div class=\"col-md-6\">";
  var correct = 0;
  for (var i = 0; i < input.length; i++) {
    if (answer.value.charAt(i) == input.charAt(i)) {
      recordAttempt += "<span class=\"glyphicon glyphicon-ok\"></span>";
      correct++;
    }
    else if (answer.value.indexOf(input.charAt(i)) != -1) {
      recordAttempt += "<span class=\"glyphicon glyphicon-transfer\"></span>";
    }
    else {
      recordAttempt += "<span class=\"glyphicon glyphicon-remove\"></span>";
    }
  }
  recordAttempt += "</div></div>"

  results.innerHTML += recordAttempt;

  if (correct == 4) {
    return true;
  }
  else {
    return false;
  }
}

function showAnswer(boolean) {
  var code = document.getElementById('code');
  if (boolean == true) {
    code.className += " success";
  }
  else {
    code.className += " failure";
  }
  code.innerHTML = answer.value
}

function showReplay() {
  document.getElementById('guessing-div').style.display = "none";
  document.getElementById('replay-div').style.display = "block";
}
