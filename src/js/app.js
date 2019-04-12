import "../components/my-error.js";
const userNameInput = document.querySelector("#user-name");
const btnEnter = document.querySelector("#btn-enter");

const enterGame = e => {
  if (userNameInput.value) {
    document.querySelector("#main").innerHTML = `<h2>Welcome! ${
      userNameInput.value
    }, play the game...</h2>`;
  } else {
    if (!document.querySelector(".error")) {
      const el = document.createElement("my-error");
      el.textContent = "Error por favor ingrese su nombre";
      el.className = "error";
      const parent = document.querySelector(".ingresar").parentNode;
      parent.insertBefore(el, document.querySelector(".ingresar"));
    }
  }
};

const removeError = e => {
  const elem = document.querySelector(".error");
  if (elem) {
    elem.parentNode.removeChild(elem);
  }
};

btnEnter.addEventListener("click", enterGame);
userNameInput.addEventListener("keypress", removeError);

const board = document.querySelector(".img-player");
board.style.animation = "shakePlayer 2s ease";
console.log(board);
/*
document
  .querySelectorAll("game-board")
  .forEach(i => (i.style.animation = "shakePlayer 2s ease"));
*/
