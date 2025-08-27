// Get all buttons and the paragraph where the info will be displayed
const buttons = document.querySelectorAll(".character-container");
const characterInfoParagraph = document.querySelector(".character-info");

const characterInfo = {
  belos: `
    <strong>Belos Black, </strong> Once a prestigious dark arts wizard, fell in love with an elf goddess, but his mortal life limited their time together.
    When an undead threat forced him into battle, he distanced himself from her and, desperate for immortality, became a lich.<br><br>
    This transformation drove a wedge between them, and Belos retreated to a life of isolation, communicating only through letters sent via his assistant, Sebas.<br><br>
    Years later, an ambitious apprentice named Lucas Blackwood betrayed Belos, attempting to seize his power by stealing his phylactery. 
    In the battle, Lucas cursed Belos, stripping him and Sebas of their powers and transforming Belos into a gnome.<br><br>
    Now, weakened and hiding, Belos plots his comeback, torn between reclaiming his power and the chance to reunite with his lost love.
  `,
  elanon: `
    <strong>Elanon Starsong</strong> comes from a family of gifted magical luthiers, once celebrated for their enchanting craft. 
    However, when his uncle Vincent stole the family's prized heirloom—a magical instrument capabal of channeling powerful magics—the family was shamed, and their business fell into ruin. <br><br>
    Elanon is now on a quest to track down Vincent, reclaim the lost heirloom, and restore his family's honor. 
    Determined and skillful, he pursues this mission not only to revive his family’s legacy but also to prove his own worth in the world of magic and music. 
    Along the way, he uncovers dark secrets about his uncle's betrayal and the lure of forbidden power that lies behind it.`,
  guy: `
    Guy the Mycanoid hails from the depths of the Underdark, a realm of bioluminescent fungi and shadowed caverns. 
    As a member of a close-knit mycelium community, Guy grew up surrounded by a culture rooted in symbiosis and peaceful coexistence with nature. <br><br>
    However, when industrialists from the surface began to mine deeper into the Underdark, threatening their fragile ecosystem, Guy couldn’t remain silent.
    After clashing with the village leader over how to handle this intrusion, Guy was sentenced to a five-year pilgrimage on the surface, meant to humble them and teach them about the ways of the mortal races. <br><br>
    Out of exile, Guy travels the surface world, driven by a vision to help their village stand resilient and self-sufficient against outside threats. 
    Embracing this pilgrimage as an opportunity, they seek knowledge, allies, and perhaps even the secrets to sustainable power, hoping to one day return home not only as an advocate but as a guide toward a new future.`,
  wyatt: `
    Wyatt Steelheart grew up in the rugged town of Elder, where magic and mayhem ruled the streets. 
    After a magical catastrophe took his parents' lives, young Wyatt survived alone, hardened by the town's chaos. 
    <br><br>As he grew, Wyatt channeled his profound sense of justice into becoming a paladin, mastering both magic and marksmanship.
    When Elder’s sheriff died, Wyatt stepped forward, vowing to bring order to the unruly town. 
    As sheriff, he hunted rogue spellcasters, protected the innocent, and found a purpose rooted in redemption. 
    <br><br>Haunted by his past, Wyatt now stands as a symbol of hope, wielding his six-shooter and faith to protect Elder from magical threats, redeeming himself and the town he calls home.`,
  croy: `test `,
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
