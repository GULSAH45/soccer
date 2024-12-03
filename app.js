//LETS GET STARTED WİTH scores
let teamAScore = 0;
let teamBScore = 0;

// GETTING ELEMENTT
let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");

//INCREMENT FUNCTION
let incrementScore = (team) => {
  if (team === "teamA") {
    teamAScore++;
    teamAScoreValue.textContent = teamAScore;
  } else if (team === "teamB") {
    teamBScore++;
    teamBScoreValue.textContent = teamBScore;
  }
};

//DECREMENT FUNCTION
let decrementScore = (team) => {
  if (team === "teamA" && teamAScore > 0) {
    teamAScore--;
    teamAScoreValue.textContent = teamAScore;
  } else if (team === "teamB" && teamBScore > 0) {
    teamBScore--;
    teamBScoreValue.textContent = teamBScore;
  }
};

//RESET FUNCTION
let resetScores = () => {
  teamAScore = 0;
  teamBScore = 0;
  teamAScoreValue.textContent = teamAScore;
  teamBScoreValue.textContent = teamBScore;
};

//change names

function setTeamNamePrompt(team) {
  const setName = `name${team}`;
  const setNameElement = document.getElementById(setName);
  const setInput = prompt("Please enter team name");
  setNameElement.textContent = setInput;
}

function setTeamScorePrompt(team) {
  const setScore = `team${team}Score`;
  const setScoreElement = document.getElementById(setScore);
  const setInput = prompt("Please enter team score");
  setScoreElement.textContent = setInput;

  const numericInput = Number(setInput);

  if (typeof numericInput === "number" && !isNaN(numericInput)) {
    setScoreElement.textContent = numericInput; // Display numeric value
  } else {
    alert("Invalid input! Please enter a valid number (not a string).");
    setScoreElement.textContent = 0;
  }
}
