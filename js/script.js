window.onload = function () {
  const startButton = document.querySelector(".start-button");
  let game;

  startButton.addEventListener("click", startGame);

  function startGame() {
    game = new Game();
    game.start();
    document.addEventListener("keydown", control);
  }

  function control(event) {
    if (event.keyCode === 38 || event.keyCode === 32) {
      game.player.jump();
    }
  }
};
