class Player {
  constructor(gameScreen, left, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.bottom = 160;
    this.width = width;
    this.height = height;
    this.jumpStrength = 25;
    this.gravity = 2;
    this.isJumping = false;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.bottom = `${this.bottom}px`;
    this.gameScreen.appendChild(this.element);
  }

  move() {
    if (this.isJumping) {
      // Update player's position based on jump
      this.bottom += this.jumpStrength;

      // Set isJumping to false to simulate gravity
      this.isJumping = false;
    } else {
      // Apply gravity
      this.bottom -= this.gravity;
    }

    // Update the player's position on the screen
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.bottom = `${this.bottom}px`;
  }

  jump() {
    this.isJumping = true;
  }

  // didCollide(obstacle) {
  //   const playerLeft = this.left;
  //   console.log(playerLeft);
  //   const playerRight = this.left + this.width;
  //   const playerBottom = this.bottom + this.height; // Adjusted to bottom of player
  //   const obstacleLeft = obstacle.left;
  //   console.log(obstacleLeft, "obstacle Left");
  //   const obstacleRight = obstacle.left + obstacle.width;
  //   const obstacleBottom = obstacle.bottom;
  //   const topObstacleBottom = obstacle.bottom + obstacle.gap;

  //   const collidedX = obstacleLeft < playerRight && obstacleRight > playerLeft;
  //   const collidedYTop =
  //     playerBottom > obstacleBottom && playerBottom < topObstacleBottom; // Check collision with top obstacle
  //   const collidedYBottom =
  //     playerBottom < topObstacleBottom &&
  //     playerBottom > obstacleBottom - this.height; // Check collision with bottom obstacle

  //   console.log(playerBottom, "playerBottom");
  //   console.log(topObstacleBottom, "topObstacleBottom");
  //   console.log(playerBottom, "topObstacleBottom");

  //   if (collidedX && !collidedYTop && !collidedYBottom) {
  //     return true; // Collided with pipe
  //   } else {
  //     return false; // No collision
  //   }
  // }

  // didCollide(obstacle) {
  //   // console.log(obstacle.bottom, "obstaclebottomiside did");
  //   // console.log(obstacle.bottom, "bottomObstacl did");
  //   console.log(obstacle);
  //   if (
  //     obstacle.left > 200 &&
  //     obstacle.left < 280 &&
  //     this.left === 220 &&
  //     this.bottom <= obstacle.obstacle.style.bottom + 60
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      console.log("Crash!");
      return true;
    } else {
      return false;
    }
  }
}
