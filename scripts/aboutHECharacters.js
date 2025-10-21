// Get all buttons and the paragraph where the info will be displayed
const buttons = document.querySelectorAll(".character-container");
const characterInfoParagraph = document.querySelector(".character-info");

const characterInfo = {
  agentG: `Temp`,
  vulnak: `Temp`,
  blink: `
  A rogue royal from a long line of interstellar Kenku nobility, Blink Dink traded the comfort of her family’s jeweled towers for adventure among the stars. 
  Chaotic, curious, and irresistibly drawn to all things shiny, she’s as much a troublemaker as she is a dreamer. Sent aboard the USS Horizon’s Edge on a mission 
  to investigate rebellion against her family’s empire, Blink sees it less as duty and more as an excuse to chase mischief, collect treasures, 
  and maybe just maybe restore a little balance to the cosmos in her own unpredictable way.`,
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
