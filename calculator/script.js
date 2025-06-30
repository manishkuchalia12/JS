// Get elements
const userInput = document.getElementById("userinput");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operations");
const otherButtons = document.querySelectorAll(".otherKeys");

let expression = "";

// Handle number buttons (0-9)
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (userInput.innerText === "0" || userInput.innerText === "Error") {
      userInput.innerText = button.innerText;
    } else {
      userInput.innerText += button.innerText;
    }
    expression = userInput.innerText;
  });
});

// Handle operation buttons (+, -, *, /, %, =)
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "=") {
      try {
        expression = eval(expression);
        userInput.innerText = expression;
      } catch (error) {
        userInput.innerText = "Error";
      }
    } else {
      // Avoid adding two operators in a row
      const lastChar = expression.slice(-1);
      if ("+-*/%".includes(lastChar)) {
        expression = expression.slice(0, -1) + value;
      } else {
        expression += value;
      }
      userInput.innerText = expression;
    }
  });
});

// AC and DEL functionality
otherButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      expression = "";
      userInput.innerText = "0";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      userInput.innerText = expression || "0";
    } else if (value === "%") {
      try {
        expression = String(eval(expression) / 100);
        userInput.innerText = expression;
      } catch (error) {
        userInput.innerText = "Error";
      }
    }
  });
});
