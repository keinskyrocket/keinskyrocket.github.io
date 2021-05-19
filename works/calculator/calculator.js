const myCalc = {
  myTotal: "0", // A place to store numbers as you type
  myHistory: null, // A plce to store numbers after clicking operators
  myOperator: null, // A place to store operators clicked
  myFlag: false, // Return true if you click operators
};

// Assign key event
const keys = document.querySelector(".keys");
keys.addEventListener("click", function(evtNum) {
  const myTarget = evtNum.target.className;
  const myValue = evtNum.target.value;

  // Exit function if class of btn
  if (!myTarget.includes("btn")) {
    return;
  }

  else if (myTarget.includes("operator")) {
    inputOperator(myValue);
    updateScreen();
    return;
  }

  else if (myValue.includes(".")) {
    inputDot(".")
    updateScreen();
    return;
  }

  else if (myValue.includes("C")) {
    clearAll();
    updateScreen();
    return;
  }

  else if (myValue.includes("S")) {
    swapPlusMinus();
    updateScreen();
    return;
  }

  else if (myValue.includes("%")) {
    percentage();
    updateScreen();
    return;
  }

  else if (myTarget.includes("number")) {
    inputNum(myValue);
    updateScreen();
    console.log(myCalc);
    return;
  }
});
 
// Input numbers
function inputNum(num) {
  const {myTotal, myFlag} = myCalc;
  if (myFlag === true) {
    myCalc.myTotal = num;
    myCalc.myFlag = false;
  } else {
    if (myTotal === "0") {
      myCalc.myTotal = num;
    } else {
      myCalc.myTotal += num;
    }
  }
}

// Input decimal
function inputDot(dot) {
  const {myTotal, myFlag} = myCalc;
  if (myFlag === true) {
    myCalc.myTotal = "0.";
    myCalc.myFlag = false;
    return;
  }
  if (!myTotal.includes(dot)) {
    myCalc.myTotal += dot;
  }
}

// Swap Plus-Minus
function swapPlusMinus() {
  if (myCalc.myTotal < 0) {
    myCalc.myTotal = Math.abs(myCalc.myTotal);
  } else if (myCalc.myTotal > 0) {
    myCalc.myTotal = "-" + myCalc.myTotal;
  } else {
    return;
  }
}

function percentage() {
  myCalc.myTotal = parseFloat(myCalc.myTotal) / 100;
}

// Operators
function inputOperator(opr) {
  const {myHistory, myTotal, myOperator} = myCalc;
  const screenValue = parseFloat(myTotal); // Convert strings to numbers

  // Update a new operator after clicking another operator
  if (myOperator && myCalc.myFlag) {
    myCalc.myOperator = opr;
    return;
  }

  if (myHistory == null && !isNaN(screenValue)) {
    myCalc.myHistory = screenValue; // Push the current number to myHistory
  } else if (myOperator) {
    const result = calcSet(myHistory, screenValue, myOperator);
    myCalc.myTotal = String(result);
    myCalc.myHistory = result;
  }
  myCalc.myFlag = true;
  myCalc.myOperator = opr;
}

function calcSet(myHistory, mySub, myOperator) {
  if (myOperator === "+") {
    return myHistory + mySub;
  } else if (myOperator === "-") {
    return myHistory - mySub;
  } else if (myOperator === "*") {
    return myHistory * mySub;
  } else if (myOperator === "/") {
    return myHistory / mySub;
  }
  return mySub; // Result for "="
}

// Clear
function clearAll() {
  myCalc.myTotal = "0";
  myCalc.myHistory = null;
  myCalc.myOperator = null;
  myCalc.myFlag = false;
}

// Update screen
function updateScreen() {
  const display = document.getElementById("calc-screen");
  display.value = myCalc.myTotal;
}

updateScreen();