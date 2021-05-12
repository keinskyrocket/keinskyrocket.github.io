  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")
const myWardrobe = [
  [],[],[]
];

for (let i = 0; i < 6; i++) {
  myWardrobe[0].push("head" + [i] + ".png");
  myWardrobe[1].push("body" + [i] + ".png");
  myWardrobe[2].push("shoes" + [i] + ".png");
}

const classHead = document.querySelector(".head");
const classBody = document.querySelector(".body");
const classShoes = document.querySelector(".shoes");

// Switch items
let itemHead = myWardrobe[0].length;
let itemBody = myWardrobe[1].length;
let itemShoes = myWardrobe[2].length;
itemHead = 3;
itemBody = 4;
itemShoes = 4;

let partsPicker = myWardrobe.length;
partsPicker = 0;

let label= document.getElementById("category");
label.innerHTML = "Change your <span class='highlight'>head</span> item";

window.addEventListener("keyup", function (itemEvent) {
  if (itemEvent.defaultPrevented) {
    return;
  }

  switch (itemEvent.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      (partsPicker > 2) ? partsPicker = 0 : partsPicker++;
      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
      (partsPicker < 1) ? partsPicker = 0 : partsPicker--;
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      leftControl();
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      rightControl();
      break;
    default:
      return;
  }

  myLabel();
  itemEvent.preventDefault();
}, true);

function leftControl () {
  if (partsPicker == 0) {
    (itemHead < 1) ? itemHead = 5 : itemHead--;
    classHead.src = "dress-the-clown/images/head" + [itemHead] + ".png";
  } else if (partsPicker == 1) {
    (itemBody < 1) ? itemBody = 5 : itemBody--;
    classBody.src = "dress-the-clown/images/body" + [itemBody] + ".png";
  } else if (partsPicker == 2) {
    (itemShoes < 1) ? itemShoes = 5 : itemShoes--;
    classShoes.src = "dress-the-clown/images/shoes" + [itemShoes] + ".png";
  } 
}

function rightControl () {
  if (partsPicker == 0) {
    (itemHead > 4) ? itemHead = 0 : itemHead++;
    classHead.src = "dress-the-clown/images/head" + [itemHead] + ".png";
  } else if (partsPicker == 1) {
    (itemBody > 4) ? itemBody = 0 : itemBody++;
    classBody.src = "dress-the-clown/images/body" + [itemBody] + ".png";
  } else if (partsPicker == 2) {
    (itemShoes > 4) ? itemShoes = 0 : itemShoes++;
    classShoes.src = "dress-the-clown/images/shoes" + [itemShoes] + ".png";
  } 
}

function myLabel() {
  if (partsPicker == 0) {
    label.innerHTML = "Change your <span class='highlight'>head</span> item";
  } else if (partsPicker == 1) {
    label.innerHTML = "Change your <span class='highlight'>body</span> item";
  } else if (partsPicker == 2) {
    label.innerHTML = "Change your <span class='highlight'>shoes</span>";
  } 
}