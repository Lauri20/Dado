document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('player');
  const game = document.getElementById('game');
  
  let playerPosition = { x: 10, y: game.offsetHeight - player.offsetHeight - 10 };
  let isJumping = false;
  let jumpHeight = 100;
  let jumpSpeed = 5;
  let gravity = 2;
  
  function updatePlayerPosition() {
    player.style.left = `${playerPosition.x}px`;
    player.style.top = `${playerPosition.y}px`;
  }
  
  function handleJump() {
    if (isJumping) {
      playerPosition.y -= jumpSpeed;
      if (playerPosition.y <= game.offsetHeight - player.offsetHeight - jumpHeight) {
        isJumping = false;
      }
    } else if (playerPosition.y < game.offsetHeight - player.offsetHeight - 10) {
      playerPosition.y += gravity;
    }
  }
  
  function gameLoop() {
    handleJump();
    updatePlayerPosition();
    requestAnimationFrame(gameLoop);
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      playerPosition.x += 10;
    } else if (e.key === 'ArrowLeft') {
      playerPosition.x -= 10;
    } else if (e.key === ' ' && playerPosition.y >= game.offsetHeight - player.offsetHeight - 10) {
      isJumping = true;
    }
  });

  updatePlayerPosition();
  gameLoop();
});