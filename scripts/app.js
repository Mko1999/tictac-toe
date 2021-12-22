const playerConfigOverlay = document.getElementById("config-detail");
const backdrop = document.querySelector(".backdrop");
const form = document.querySelector(".form");
const outputError = document.querySelector(".config-errors");
const cancelConfigBtn = document.getElementById("cancel-config-btn");

const editPlayer1 = document.querySelector(".btn-edit");
const editPlayer2 = document.querySelector(".btn-edit-second");

let editedPlayer = 0;

editPlayer1.addEventListener("click", (event) => {
  editedPlayer = +event.target.dataset.playerid;

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
});
