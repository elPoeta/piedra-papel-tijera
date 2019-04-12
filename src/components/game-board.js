class GameBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                img {
                    width: 200px;
                }
              h2 ::slotted(h2){
                 color: #fff;
               } 
            </style>
            <section class='board'>
              <h2><slot name='title'>Welcome! Player play the game...</slot></h2> 
              <slot name='player-hand'> <img src="./assets/img/rock.png" alt="piedra" class="img-player"/></slot>
              <slot name='cpu-hand'>  <img src="./assets/img/rock.png" alt="piedra" /></slot>  
            </section>
        `;
  }
  connectedCallback() {
    // this.shadowRoot.querySelector(".img-player").style.animation = "shakePlayer 3s ease";
  }

  shake() {
    console.log("shake");
    this.shadowRoot.querySelector(".img-player").style.animation =
      "shakePlayer 3s ease";
  }
}
customElements.define("game-board", GameBoard);
