const game = document.getElementById("game");
const dino = document.getElementById("dino");

let isJumping = false;
let isGameOver = false;

function keyHandler(e) {
  if (e.keyCode === 32) {
    // console.log("pressed");
    if (!isJumping) {
      jump();
    }
  }
}

document.addEventListener("keyup", keyHandler);

//setTimeout allows us to run a function once after the interval of time.
//setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

// setinterval vs settimeout

//setTimeout

// function jump() {

//  console.log("jumping");
// }
// // setTimeout(jump, 5000)

// // jump  function  call after 5sec

// timeOutId=setTimeout(jump ,5000 )
// console.log(timeOutId) // in console we get the id ,with th help of id we can  remove using eg: clearTimeOut(timeOutId)

//setInteval

// function jump() {

//  console.log("jumping");
// }
// // setInteval(jump, 1000)// in every 1s jump function call hunxa

// intevalId = setInteval(jump, 1000)

// console.log(intervalId)

//showing date
// function display(){
//     time=new Date();
//     // console.log(time);
//     document.getElementById('time').innerHTML=time;
// }
// setInterval(display ,1000)//in every 1s time time update hunxa

let position = 0;
function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    //moving up to 170px
    if (position >= 170) {
      //then stop in 170px
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        //moving down
        //bottom ma 0
        if (position <= 0) {
          //then stop at bottom 0
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position = position - 20;
          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
      position = position + 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

//obstacle

function createObstacle() {
  let randomTime = Math.random() * 5000;
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  game.appendChild(obstacle);
  let obstaclePosition = 1000;
  obstacle.style.left = obstaclePosition + "px";

  //moving obstacles to left
  let timer = setInterval(() => {
    if ((obstaclePosition > 0) & (obstaclePosition < 50) && position < 10) {
      clearInterval(timer);
      // alert("game over")
      game.innerHTML = `<div id="dino"></div>`;
      isGameOver = true;
      document.body.innerHTML = `<div class="restart">
            <span class="game-over" >Game Over</span>
            <Button  class="restart-button" onclick= location.reload()>Restart</Button>
            </div>`;
    }
    obstaclePosition = obstaclePosition - 8;
    obstacle.style.left = obstaclePosition + "px";
  }, 20);

  setTimeout(createObstacle, randomTime);
}
createObstacle();

//score
let score = 0;
function scoreBoard() {
  let scoreTime = setInterval(() => {
    score++;
    let scoring = document.getElementById("scoring");
    scoring.innerHTML = "Your Score:" + score;
  }, 1000);
  console.log(scoreTime);
}

window.addEventListener("load", () => {
  console.log("page is fully loaded");
  scoreBoard();
});



//btoa("hello world")
// 'aGVsbG8gd29ybGQ='
// atob('aGVsbG8gd29ybGQ=')
// 'hello world'
