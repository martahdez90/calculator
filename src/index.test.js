//the test runner used is jest
//yarn add --dev jest
//yarn test

// const setNum = require("./app");
// const result = setNum()
// test("If a result was displayed, reset number", () => {
//   expect(result).toBe(theNum);
// })

const { setNum, moveNum, displayNum, clearAll }= require("./app");

// let setNum = () => {
//     // If a result was displayed, reset number
//     if (resultNum) {
      
//       theNum = this.getAttribute("data-num");
//       resultNum = "";
//     } else {
//       // Otherwise, add digit to previous number (this is a string!)
//       theNum += this.getAttribute("data-num");
//     }

//     viewer.innerHTML = theNum; // Display current number
//   };