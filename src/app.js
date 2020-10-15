
(function() {
    // Shortcut to get elements
  /*refactor ES6*/
  let el = (element) => {
     // If passed an ID...returns single element
      (element.charAt(0) === "#")? document.querySelector(element) : document.querySelectorAll(element);
      // Otherwise, returns a nodelist
    };

    // variables
  const viewer = el("#viewer"); // Calculator screen where result is displayed
  const equals = el("#equals"); // Equal button
  const nums = el(".num"); // List of numbers
  const ops = el(".ops"); // List of operators
  let theNum = "", // Current number
      oldNum = "", // First number
      resultNum, // Result
      operator; // true or false

    // When: Number is clicked. Get the current number selected
  let setNum = () => {
      // If a result was displayed, reset number
      if (resultNum) {
        
        theNum = this.getAttribute("data-num");
        resultNum = "";
      } else {
        // Otherwise, add digit to previous number (this is a string!)
        theNum += this.getAttribute("data-num");
      }

      viewer.innerHTML = theNum; // Display current number
    };

    // When: Operator is clicked. Pass number to oldNum and save operator
    let moveNum = () => {
      oldNum = theNum;
      theNum = "";
      operator = this.getAttribute("data-ops");
      equals.setAttribute("data-result", ""); // Reset result in attribute
    };

    // When: Equals is clicked. Calculate result
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
    };

    // When: Clear button is pressed. Clear everything
    let clearAll = () => {
      oldNum = "";
      theNum = "";
      viewer.innerHTML = "0";
      equals.setAttribute("data-result", resultNum);
    };

    /* The click events */

    // Add click event to numbers
    for (let i = 0, l = nums.length; i < l; i++) {
      nums[i].onclick = setNum;
    }

    // Add click event to operators
    for (let i = 0, l = ops.length; i < l; i++) {
      ops[i].onclick = moveNum;
    }

    // Add click event to equal sign
    equals.onclick = displayNum;

    // Add click event to clear button
    el("#clear").onclick = clearAll;
  })();