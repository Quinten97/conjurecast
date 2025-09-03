// Get all buttons and the paragraph where the info will be displayed
const buttons = document.querySelectorAll(".character-container");
const characterInfoParagraph = document.querySelector(".character-info");

const characterInfo = {
  agentG: `Temp`,
  vulnak: `Temp`,
  blink: `Temp`,
  danny: `Temp`,
};

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the info from the data attribute and set it as the paragraph's HTML
    const selected = button.getAttribute("data-info");
    characterInfoParagraph.innerHTML =
      characterInfo[selected] || "<em>Information not available.</em>";
  });
});
