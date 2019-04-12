import "../components/my-error.js";
const main = document.querySelector('#main');
const enterGame = document.querySelector('enter-game');
enterGame.addEventListener('ingresar', e => {
  console.log('enter from dom ', enterGame.userName);
  const template = `
 
    <game-board>
     <h2 slot='title'>Welcome! ${enterGame.userName}, play the game...</h2>
     <div>
     <hr class='divisor'/>
     </div>
     <div class='board-hands-container'>
     <div class='player-hand'>
     <h3>${enterGame.userName}</h3>
      <img src="./assets/img/rock.png" alt="" class="img-player" slot='player-hand' />
     </div>
     <div class='cpu-hand'>
     <h3>Computer</h3> 
      <img src="./assets/img/rock.png" alt="" slot='cpu-hand' />
     </div>
     </div> 
    </game-board>    
  `;
  main.innerHTML = template;
  const board = document.querySelector(".img-player");
  board.style.animation = "shakePlayer 2s ease";
})
//const userNameInput = document.querySelector("#user-name");
//const btnEnter = document.querySelector("#btn-enter");
/*
 <game-board>
    <img src="./assets/img/rock.png" alt="" class="img-player" slot='player-hand' />
    <img src="./assets/img/rock.png" alt="" slot='cpu-hand' />
  </game-board>

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

document
  .querySelectorAll("game-board")
  .forEach(i => (i.style.animation = "shakePlayer 2s ease"));
*/
