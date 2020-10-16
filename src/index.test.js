//the test runner used is jest
//yarn add --dev jest
//yarn test

// const setNum = require("./app");
// const result = setNum()
// test("If a result was displayed, reset number", () => {
//   expect(result).toBe(theNum);
// })

const { setNum, moveNum, displayNum, clearAll } = require("./app");

test("if number are right", () => {
  let oldNum = 5
  let theNum = 3
  let operator = "plus"
  expect(displayNum()).toBe(8)
})
let displayNum = () => {
  // Convert string input to numbers
  oldNum = parseFloat(oldNum);
  theNum = parseFloat(theNum);

  // Perform operation
  switch (operator) {
    case "plus"://sum
      resultNum = oldNum + theNum;
      break;
    
    case "minus"://subtraction
      resultNum = oldNum - theNum;
      break;
    
    // If equal is pressed without an operator, keep number and continue
    default:
      resultNum = theNum;
  }

  // If NaN or Infinity returned
  if (!isFinite(resultNum)) {
    if (isNaN(resultNum)) {
      // If result is not a number; set off by, eg, double-clicking operators
      resultNum = "You broke it!";
    } else {
      // If result is infinity, set off by dividing by zero
      resultNum = "Look at what you've done";
      el("#calculator").classList.add("broken"); // Break calculator
    }
  }

  // Display result, finally!Yes!!!
  viewer.innerHTML = resultNum;
  equals.setAttribute("data-result", resultNum);

  // Now reset oldNum & keep result
  oldNum = 0;
  theNum = resultNum;
  return resultNum;
};