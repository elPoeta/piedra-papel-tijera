class GameBoard extends HTMLElement {
  constructor() {
    super();
    this.playerName = 'Player';
    this._scorePlayer = 0;
    this._scoreCpu = 0;
    this.option;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
   
            <style>
            board{
              display:grid;
              grid-template-columns: 1fr;
              width: 80%;
              margin: 10px auto;
              justify-content: center;
              align-content: center;
              text-align: center;
              grid-gap: 5px;
              padding: 5px;
          }
          .board-hands-container{
              display:grid;
              grid-template-columns: 1fr 1fr;
              width: 80%;
              margin: 10px auto;
              justify-content: center;
              align-content: center;
              padding: 5px;
            }
            .player-hand, .cpu-hand{
              justify-self:center
            }
            .divisor {
              border: 0;
              height: 2px;
              background-image: linear-gradient(
                to right,
                rgba(219, 150, 22, 0),
                rgba(219, 150, 22, 0.75),
                rgba(219, 150, 22, 0)
              );
              margin-bottom: 15px;
              margin-top: 15px;
            }
            h2,h3,h4{
              text-align:center;
            }
            h2{
              color: #fff;
            }
            h3{
              color:#fda744;
            }
            h4{
              color: #2cbbfd;
            }
            img {
                  width: 200px;
                }
                .img-player{
                  transform: rotateY(180deg);
                }
                ul{
                  justify-self:center;
                  text-align:center;
                  padding: 20px;
                }
            li{
              list-style: none;
              display: inline-block;
              padding: 15px;
            }    
            button{
               width: 110px;
                border: none;
                border-radius: .5em;
                background-color: #15a9ee;
                color: #fff;
                font-size: 1.3em;
                cursor: pointer;
            }
            .hand-player-animation{
              animation : shakePlayer 2s ease;
            }
            .hand-cpu-animation{
              animation : shakeComputer 2s ease;
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
                
                @keyframes shakeComputer {
                  0% {
                    transform: translateY(0px);
                  }
                  15% {
                    transform: translateY(-50px);
                  }
                  25% {
                    transform: translateY(0px);
                  }
                  35% {
                    transform: translateY(-50px);
                  }
                  50% {
                    transform: translateY(0px);
                  }
                  65% {
                    transform: translateY(-50px);
                  }
                  75% {
                    transform: translateY(0px);
                  }
                  85% {
                    transform: translateY(-50px);
                  }
                  100% {
                    transform: translateY(0px);
                  }
                }
            </style>
            <template>
            <section class='board'>   
              <h2 class='title'></h2>
              <div>
                <hr class='divisor'/>
              </div>
              <div class='board-hands-container'>
                 <div class='player-hand'>
                    <h3 class='player-name'>Player</h3>
                    <h4>Puntos: <span id='score-player'></span></h4>
                    <img src="./assets/img/piedra.png" alt="" class="hand img-player" />
                </div>
                <div class='cpu-hand'>
                    <h3>Computer</h3> 
                    <h4>Puntos: <span id='score-cpu'></span></h4>   
                   <img src="./assets/img/piedra.png" alt="" class='hand img-cpu' />
                </div>
                </div>  
                <ul>
                  <li><button id='btn-piedra'>Piedra</button></li>
                  <li><button id='btn-papel'>Papel</button></li>
                  <li><button id='btn-tijera'>Tijera</button></li>
                </ul>
               <div>
                <h2 id='resultado'></h2>
               </div>
            </section>
            </template>
        `;
  }
  connectedCallback() {
    this.playerName = this.getAttribute('player');
    const content = this.shadowRoot.querySelector('template').content.cloneNode(true);
    content.querySelector('.player-name').innerHTML = this.playerName;
    content.querySelector('.title').innerHTML = `Welcome! ${this.playerName}, play the game...`
    content.querySelector('#score-player').innerHTML = this._scorePlayer;
    content.querySelector('#score-cpu').innerHTML = this._scoreCpu;
    const buttons = content.querySelectorAll('button');
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', e => this._playerPlay(index));
    });
    this.shadowRoot.appendChild(content);
  }

  _shake() {
    this.shadowRoot.querySelector('#resultado').innerHTML = '';
    this.shadowRoot.querySelector(".img-player").classList.add('hand-player-animation');
    this.shadowRoot.querySelector(".img-cpu").classList.add('hand-cpu-animation');
  }
  removeAnimation() {
    this.shadowRoot.querySelector(".img-player").classList.remove('hand-player-animation');
    this.shadowRoot.querySelector(".img-cpu").classList.remove('hand-cpu-animation');
  }
  _playerPlay = e => {
    this.option = e;
    const playerPlayEvent = new Event('playerplay');
    this._shake();
    this.dispatchEvent(playerPlayEvent);

  }
  updateBoardImage(player, cpu) {
    const playerImg = this.shadowRoot.querySelector('.img-player');
    playerImg.src = `./assets/img/${player}.png`;
    const cpuImg = this.shadowRoot.querySelector('.img-cpu');
    cpuImg.src = `./assets/img/${cpu}.png`;
  }
  updateScore(score) {
    console.log('Score ROOT', score);
    this.shadowRoot.querySelector('#score-player').innerHTML = score.player;
    this.shadowRoot.querySelector('#score-cpu').innerHTML = score.cpu;
    const resultado = this.shadowRoot.querySelector('#resultado');
    switch (score.win) {
      case 'player': {
        resultado.innerHTML = `${this.playerName} Gana!!!`;
        break;
      }
      case 'cpu': {
        resultado.innerHTML = `Computer Gana!!!`;
        break;
      }
      default: {
        resultado.innerHTML = "Empate!!!";
      }
    }
  }
}
customElements.define("game-board", GameBoard);
