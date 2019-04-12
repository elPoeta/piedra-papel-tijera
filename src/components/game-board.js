class GameBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                img {
                    width: 200px;
                }
                .player-hand img{
                     transform: rotateY(180deg);
                }
                @keyframes shakePlayer {
  0% {
    transform: rotateY(180deg) translateY(0px);
  }
  15% {
    transform: rotateY(180deg) translateY(-50px);
  }
  25% {
    transform: rotateY(180deg) translateY(0px);
  }
  35% {
    transform: rotateY(180deg) translateY(-50px);
  }
  50% {
    transform: rotateY(180deg) translateY(0px);
  }
  65% {
    transform: rotateY(180deg) translateY(-50px);
  }
  75% {
    transform: rotateY(180deg) translateY(0px);
  }
  85% {
    transform: rotateY(180deg) translateY(-50px);
  }
  100% {
    transform: rotateY(180deg) translateY(0px);
  }
}
            </style>
            <section class='board'>
                <div class='player-hand'>
                     <slot></slot>
                </div>
                <div class='cpu-hand'>
                     <img src="./assets/img/rock.png" alt="" />
                </div>
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
