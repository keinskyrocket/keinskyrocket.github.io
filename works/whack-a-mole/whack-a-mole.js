  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

const myBoard = [];

const myCells = document.querySelectorAll("td");
const complete = document.querySelector(".complete");

for (let i = 0; i < myCells.length; i++) {
  const myImg = document.createElement("img");
  myImg.src = "whack-a-mole/mole.PNG"; 
  myImg.style.visibility = "hidden";
  myCells[i].appendChild(myImg);
}

function gameStart() {
  var myShuffle = setInterval(function(){   
    const pickOne = Math.floor(Math.random() * 25);
    const myVisibility = document.querySelectorAll("img");
    myVisibility[pickOne].style.visibility = "visible";
    var pp = setTimeout(function hideMe() {
      myVisibility[pickOne].style.visibility = "hidden";
    }, 1000);
  }, 1000);
  
  myCells.forEach(function(myTarget) {
    myTarget.addEventListener("click", function(evtHit) {
      if (evtHit.target.style.visibility === "visible") {
        clearInterval(myShuffle);
        complete.classList.add("show-complete");
      }
    })
  });
}

const btnStart = document.getElementById("start");
btnStart.addEventListener("click", function(evtStart) {
  gameStart();
  evtStart.target.style.visibility = "hidden";
});

const btnRestart = document.getElementById("restart");
btnRestart.addEventListener("click", function() {
  complete.classList.remove("show-complete");
  gameStart();
});