//LETS GET STARTED WİTH scores
let teamAScore = 0;
let teamBScore = 0;

// GETTING ELEMENTT
let teamAScoreValue = document.getElementById('teamAScore');
let teamBScoreValue = document.getElementById('teamBScore');

//INCREMENT FUNCTION
let incrementScore = (team) => {
    if (team === 'teamA') {
        teamAScore++;
        teamAScoreValue.textContent = teamAScore;
    } else if (team === 'teamB' ) {
        teamBScore++;
        teamBScoreValue.textContent = teamBScore;
    }
}

//DECREMENT FUNCTION
let decrementScore = (team) => {
    if (team === 'teamA' && teamAScore > 0) {
        teamAScore--;
        teamAScoreValue.textContent = teamAScore;
    } else if (team === 'teamB' && teamBScore > 0) {
        teamBScore--;
        teamBScoreValue.textContent = teamBScore;
    }
}

//RESET FUNCTION
let resetScores = () => {
    teamAScore = 0;
    teamBScore = 0;
    teamAScoreValue.textContent = teamAScore;
    teamBScoreValue.textContent = teamBScore;
}