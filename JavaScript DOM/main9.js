let names = ['Ben', 'Joel', 'Judy', 'Anne', 'Mike'];
let scores = [88, 98, 77, 88, 99];

window.onload = function() {
    document.getElementById('addButton').onclick = addScore;
    document.getElementById('displayResultsButton').onclick = displayResults;
    document.getElementById('displayScoresButton').onclick = displayScores;
    document.getElementById('nameInput').focus();
};

function addScore() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const scoreInput = parseInt(document.getElementById('scoreInput').value.trim(), 10);

    // Validate inputs
    if (nameInput === '' || isNaN(scoreInput) || scoreInput < 0 || scoreInput > 100) {
        alert("You must enter a name and a valid score");
        return;
    }

    // Add name and score to arrays
    names.push(nameInput);
    scores.push(scoreInput);
    
    // Clear inputs and focus on the name field
    document.getElementById('nameInput').value = '';
    document.getElementById('scoreInput').value = '';
    document.getElementById('nameInput').focus();
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    const highestIndex = scores.indexOf(Math.max(...scores));
    const highestScoreName = names[highestIndex];
    const highestScore = scores[highestIndex];

    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average score = ${average.toFixed(2)}</p>
        <p>High score = ${highestScoreName} with a score of ${highestScore}</p>
    `;
}

function displayScores() {
    const table = document.getElementById('scores_table');

    // Clear previous rows (except header)
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
    `;
    
    // Add names and scores to the table
    for (let i = 0; i < names.length; i++) {
        const row = table.insertRow();
        row.insertCell(0).textContent = names[i];
        row.insertCell(1).textContent = scores[i];
    }

    displayResults(); // Display results after showing scores
}
