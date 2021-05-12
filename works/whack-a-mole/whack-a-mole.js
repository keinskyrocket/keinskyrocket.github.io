  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

const myBoard = [];

document.getElementsByTagName("table")[0].id = "myTable";  // Pass new ID to <table>

const myCells = document.querySelectorAll("td");  // Assign <img> to all the <td> in <table>
for (let i = 0; i < myCells.length; i++) {
  myBoard.push({
    target: "whack-a-mole/mole.PNG",
    visibility: true,
    tag: i
  });
  const myImg = document.createElement("img");  // Insert <img>
  myImg.src = myBoard[i].target;  // myImg.src = "mole.PNG";
  myImg.width = "100";
  myCells[i].appendChild(myImg);
  myCells[i].style.backgroundColor = "#fdf0c1";
  myCells[i].style.borderRadius = "16px";
  myCells[i].style.cursor = "pointer";
  myImg.id = "moleImg";
}

function randomMole() {
  const myVisibility = document.querySelectorAll("#moleImg");
  const pickOne = myBoard[Math.floor(Math.random() * myBoard.length)];  // Pick one object from myBoard
  var result = pickOne.tag  // Get value of tag property
  for (let i = 0; i < myCells.length; i++) {
    if (myBoard[i].tag === pickOne.tag) {
      myCells[i].style.pointerEvents = "auto";
      myVisibility[i].style.visibility = "visible";
    } else {
      myVisibility[i].style.visibility = "hidden";
      myCells[i].style.pointerEvents = "none";
    }
  }
  myCells[result].addEventListener("click", function () { randomMole(); }, true);
}
randomMole();
