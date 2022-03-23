const game = document.getElementById("game");
const dino =document.getElementById("dino");


function keyHandler(e) {
    if(e.keyCode === 32){
        // console.log("pressed");
            jump();
    }
}

document.addEventListener('keyup',keyHandler)

//setTimeout allows us to run a function once after the interval of time.
//setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

  // setinterval vs settimeout
   //setTimeout->allows us to run function once after the intervaL of the time

// function jump() {

//  console.log("jumping");
// }
// // setTimeout(jump, 5000)

// // jump  function  call after 5sec 

// timeOutId=setTimeout(jump ,5000 )
// console.log(timeOutId) // in console we get the id ,with th help of id we can clearTimeOut 


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


function jump(){
    let position=0
   let upTimerId = setInterval(function() {
    //move up   
    // console.log(timerId);
    //moving every 10 px
    position =position + 10;

    //to jump
    //adding pixel
    //this is string
    dino.style.bottom= position +'px';

    //moving down
     if (position===200){
        clearInterval(upTimerId)//200px up pachi stop hunxa 
         console.log('down')
                let downTimerId = setInterval(function(){
                    position = position - 10
                    dino.style.bottom= position + 'px';
                    
                    //stop moving down when position 0
                        if (position===0)
                    clearInterval(downTimerId)     
                },20)
     }

   },20)//invoke in every 20 millisecond
}



//obstacle


function createObstacle(){

        let obstaclePosition =1200
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        game.appendChild(obstacle)
        obstacle.style.left= obstaclePosition + 'px';

//moving obstacles to left
let randomTime = Math.random() * 1000
setInterval(function(){
    obstaclePosition=obstaclePosition-13  
    obstacle.style.left=obstaclePosition + 'px';
},20)
  

setTimeout(createObstacle,randomTime) 

} 
createObstacle()
  


// var img = document.createElement("img");
// img.src = "https://www.kindpng.com/picc/m/669-6699412_game-of-thrones-dragon-colours-hd-png-download.png";
// var src = document.getElementById("header");
// src.appendChild(img);

document.body.style.backgroundImage = "url('https://www.kindpng.com/picc/m/669-6699412_game-of-thrones-dragon-colours-hd-png-download.png')";
