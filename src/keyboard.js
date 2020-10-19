let theNum = "",
  oldNum = "",
  keyPressed = "key", //key pressed
  resultNum,
  operator;

//When: key is press. Get the current number selected
let keyboard = () => {
  window.addEventListener(
    "keydown",
    (event) => {
      keyPressed = event.key;
      console.log(keyPressed)
      //if the keypressed is a number
      if (
        keyPressed === "0" ||
        keyPressed === "1" ||
        keyPressed === "2" ||
        keyPressed === "3" ||
        keyPressed === "4" ||
        keyPressed === "5" ||
        keyPressed === "6" ||
        keyPressed === "7" ||
        keyPressed === "8" ||
        keyPressed === "9"
      ) {
        if (resultNum) {
          // If a result was displayed, reset number
          theNum = keyPressed;
          resultNum = "";
        } else {
          // Otherwise, add digit to previous number (this is a string!)
          theNum += keyPressed;
        }
      } else {
        //if keyPress it's not a number
        switch (keyPressed) {
          case "+":
            oldNum = theNum;
            theNum = "";
            operator = "plus";
            break;
          case "-":
            oldNum = theNum;
            theNum = "";
            operator = "minus";
            break;
          case "*":
            oldNum = theNum;
            theNum = "";
            operator = "mult";
            break;
          case "/":
            oldNum = theNum;
            theNum = "";
            operator = "div";
            break;
            case "Backspace":
              clearAll();
              break;
            case "Enter"://press start 
              displayNum();
              break;
          // If KeyPressed is not a number;
          default:
            document.getElementById("viewer").innerHTML = "solo numeros";
        }
      }
    }
  );
};

keyboard();

document.getElementById("viewer").innerHTML = resultNum;
