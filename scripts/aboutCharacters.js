// Get all buttons and the paragraph where the info will be displayed
const buttons = document.querySelectorAll(".character-container");
const characterInfo = document.querySelector(".character-info");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the info from the data attribute and set it as the paragraph's text
    const infoText = button.getAttribute("data-info");
    characterInfo.textContent = infoText;
  });
});
