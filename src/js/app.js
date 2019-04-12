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
  main.innerHTML = renderBoard(enterGame.userName);
  const btnPlayerPlay = document.querySelector('game-board');
  btnPlayerPlay.addEventListener('playerplay', e => {
    const cpuOption = Math.floor(Math.random() * 3);

    setTimeout(() => {
      btnPlayerPlay.removeAnimation();
      console.log('palyer : ', options[btnPlayerPlay.option], ' CPU: ', options[cpuOption]);
    }, 2000)

  });
}

