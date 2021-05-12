  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

// Store images
const myStable = {};
const myPic = [];
myStable.uniLeft = myPic;
myStable.uniCenter = myPic;
myStable.uniRight = myPic;

for (let i = 0; i < 4; i++) {
  myPic.push(
    "inflate-the-unicorn/images/unicorn-" + [i] + ".png"
  );
}

// Apply the first array item to each img
const myImage = document.getElementsByClassName("inflate-an-image");
for (let i = 0; i < myImage.length; i++) {
  myImage[i].src = myPic[0];
}

// Apply individual ID to each img
const giveID = document.querySelectorAll(".inflate-an-image");
for (let i = 0; i < giveID.length; i++) {
  giveID[i].id = "flip" + [i+1];
}

// Flip images by clicking
let a = 1;
let b = 1;
let c = 1;
document.getElementById("flip1").addEventListener("click", function() {
  if (a === 3) {
    alert("I'm full!");
  } else {
    a++;
  }
  document.getElementById("flip1").src = myStable.uniLeft[a];
});
document.getElementById("flip2").addEventListener("click", function() {
  if (b === 3) {
    alert("I can't take it anymore!!");
  } else {
    b++;
  }
  document.getElementById("flip2").src = myStable.uniCenter[b];
});
document.getElementById("flip3").addEventListener("click", function() {
  if (c === 3) {
    alert("I'm about to explode.");
  } else {
    c++;
  }
  document.getElementById("flip3").src = myStable.uniRight[c];
});

console.log(a);