let display = document.getElementById("display");

// Function to append value to the display
function appendValue(value) {
  display.innerText += value;
}

// Function to clear the display
function clearDisplay() {
  display.innerText = '';
}

// Function to calculate the result
function calculate() {
  try {
    // Evaluate the entered expression
    let result = eval(display.innerText);
    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
  }
}
