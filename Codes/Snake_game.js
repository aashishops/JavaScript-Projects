let snake;
let resolution = 20;
let food;
let w;
let h;
let video;
let label='Waiting';

function setup() {
   createCanvas(400, 400);// create canavas

  video = createCapture(VIDEO);//load video// VIDEO is a constant that .p5 knows
  video.hide();// Hide dual camera
  w = floor(width / resolution);
  h = floor(height / resolution);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}

function draw() {
  scale(resolution);
  background(220);
  image(video, 0, 0);
  textSize(32);
  fill(255);
  text(label,10,50);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    print('END GAME! Click on Play button to start again');
    background(204, 102, 0);
    noLoop();
  }

  noStroke();
  fill(255, 204, 0);
  rect(food.x, food.y, 1, 1);
}
