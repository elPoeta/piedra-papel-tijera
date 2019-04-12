import "../components/game-board.js";
const main = document.querySelector('#main');
const enterGame = document.querySelector('enter-game');
enterGame.addEventListener('ingresar', e => {
  game();
});

const renderBoard = userName => {
  return `<game-board player='${userName}'></game-board>`;
}
const game = () => {
  const options = ['piedra', 'papel', 'tijera'];
  const score = {
    player: 0,
    cpu: 0,
    win: "empate"
  }
  main.innerHTML = renderBoard(enterGame.userName);
  const btnPlayerPlay = document.querySelector('game-board');
  btnPlayerPlay.addEventListener('playerplay', e => {
    const cpuOption = Math.floor(Math.random() * 3);
    const cpuChoice = options[cpuOption];
    const playerChoice = options[btnPlayerPlay.option]
    setTimeout(() => {
      btnPlayerPlay.removeAnimation();
      updateBoard(playerChoice, cpuChoice);
      console.log('palyer : ', playerChoice, ' CPU: ', cpuChoice);
      compareHands(playerChoice, cpuChoice);
    }, 2000);

  });
  const updateBoard = (playerChoice, cpuChoice) => {
    btnPlayerPlay.updateBoardImage(playerChoice, cpuChoice);
  }
  const compareHands = (playerChoice, cpuChoice) => {
    if (playerChoice === cpuChoice) {
      console.log('EMPATE!! ', score);
      score.win = "empate";
      updateScores();
      return;
    }
    if (playerChoice === 'piedra') {
      if (cpuChoice === 'tijera') {
        score.player++;
        score.win = "player";
        updateScores();
        console.log('PLAYER WIN!!', score);
        return;
      } else {
        score.cpu++;
        score.win = "cpu";
        updateScores();
        console.log('CPU WIN!!!', score);

        return;
      }
    }
    if (playerChoice === 'papel') {
      if (cpuChoice === 'piedra') {
        score.player++;
        score.win = "player";
        updateScores();
        console.log('PLAYER WIN!!', score);
        return;
      } else {
        score.cpu++;
        score.win = "cpu";
        updateScores();
        console.log('CPU WIN!!!', score);
        return;
      }
    }
    if (playerChoice === 'tijera') {
      if (cpuChoice === 'papel') {
        score.player++;
        score.win = "player";
        updateScores();
        console.log('PLAYER WIN!!', score);
        return;
      } else {
        score.cpu++;
        score.win = "cpu";
        updateScores();
        console.log('CPU WIN!!!', score);
        return;
      }
    }
  }
  const updateScores = () => {
    console.log('upd ', score);
    btnPlayerPlay.updateScore(score);
  }
}


