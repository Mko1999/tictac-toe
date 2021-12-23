startNewGame.addEventListener("click", () => {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please select custom names for players");
    return; // this line means if statement is true code after it will not execute
  }

  // for starting new game
  resetGameStatus();
  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
});

const resetGameStatus = () => {
  gameIsOver = false;
  activePlayer = 0;
  currentRound = 1;
  gameOver.firstElementChild.innerHTML =
    'You won!<span class="winner-name"></span>';
  gameOver.style.display = "none";
  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      console.log(gameBoardElement);
      const gameBoardItem = gameBoardElement.children[gameBoardIndex];
      gameBoardItem.textContent = "";
      gameBoardItem.classList.remove("disabled");
      gameBoardIndex++;
      // reset
    }
  }
};

const switchPlayer = () => {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerName.textContent = players[activePlayer].name;
};

gameBoardElement.addEventListener("click", (event) => {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }
  const selectedField = event.target;
  // getting the eleent we want
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1; // because of array index starts zero
  console.log(selectedField);
  if (gameData[selectedRow][selectedColumn] > 0) {
    // it will be 0 if it is not selected
    alert("Please select an empty field");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  console.log(selectedColumn);

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);
  const winnerId = checkForGameOver();
  console.log(winnerId);

  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
});

const checkForGameOver = () => {
  // Checking the rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // checking columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //   if (
  //     gameData[1][0] > 0 &&
  //     gameData[1][0] === gameData[1][1] &&
  //     gameData[1][1] === gameData[1][2]
  //   ) {
  //     return gameData[1][0];
  //   }
  //   if (
  //     gameData[2][0] > 0 &&
  //     gameData[2][0] === gameData[2][1] &&
  //     gameData[2][1] === gameData[2][2]
  //   ) {
  //     return gameData[2][0];
  //   }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
};

const endGame = (winnerId) => {
  gameIsOver = true;
  gameOver.style.display = "block";
  if (winnerId > 0) {
    console.log(winName, "win");
    console.log(winName.textContent, "content");
    winName.textContent = players[winnerId - 1].name;
    gameOver.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    document.getElementById("h2").textContent = "Draw !";
    winName.textContent = "It 's a draw";
  }
};
