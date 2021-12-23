const playerConfigOverlay = document.getElementById("config-detail");
const backdrop = document.querySelector(".backdrop");
const form = document.querySelector(".form");
const outputError = document.querySelector(".config-errors");
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const inputField = document.querySelector(".name-field");
const editPlayer1 = document.querySelector(".btn-edit");
const editPlayer2 = document.querySelector(".btn-edit-second");
const startNewGame = document.querySelector(".start-game-btn");
const gameArea = document.querySelector(".active-game");
const gameFieldElements = document.querySelectorAll(".game-board li");
const gameBoardElement = document.querySelector(".game-board");
const activePlayerName = document.querySelector(".active-player-name");
const gameOver = document.querySelector(".game-over");
const winName = document.querySelector(".winner-name");
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "0",
  },
];
