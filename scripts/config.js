editPlayer1.addEventListener("click", (event) => {
  editedPlayer = +event.target.dataset.playerid;
  console.log(editedPlayer);
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
});

editPlayer2.addEventListener("click", (event) => {
  editedPlayer = +event.target.dataset.playerid;
  console.log(editedPlayer);
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
});

cancelConfigBtn.addEventListener("click", () => {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  outputError.textContent = "";
});

backdrop.addEventListener("click", () => {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  outputError.textContent = "";
  inputField.value = "";
  console.log(gameFieldElements);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const formData = new FormData(event.target);
  console.log(formData);
  const enteredPlayername = formData.get("username").trim(); // "    max     " =>"max"
  console.log(enteredPlayername);

  if (!enteredPlayername) {
    // checking input validation
    event.target.firstElementChild.classList.add("error");
    outputError.textContent = "Please enter a valid name";
    return;
  }
  const updatedPlayerData = document.querySelector(
    ".player-" + editedPlayer + "-data"
  );
  console.log(updatedPlayerData);
  console.log(updatedPlayerData.childNodes);
  console.log(updatedPlayerData.childNodes[1].textContent);
  updatedPlayerData.childNodes[1].textContent = enteredPlayername;
  //Getting index dynamically
  players[editedPlayer - 1].name = enteredPlayername;
  // Calling function that closes form
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  form.firstElementChild.classList.remove("error");
  outputError.textContent = "";
  inputField.value = "";
});
