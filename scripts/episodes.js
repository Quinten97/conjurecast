const rssFeedUrl = "https://anchor.fm/s/ea5c4870/podcast/rss"; // Replace with your RSS feed URL
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  rssFeedUrl
)}&api_key=cxuieooisuopfpxi4qec84f0rfwkwv2tzaf8z3ib&count=100`;

function cleanDescription(description) {
  // Find the index of "Music Credits:"
  const musicCreditsIndex = description.indexOf("Music Credits:");
  if (musicCreditsIndex !== -1) {
    // Get the part before "Music Credits:" and clean it
    description = description.substring(0, musicCreditsIndex).trim();
  }

  // Remove any trailing whitespace, newlines, or carriage returns
  description = description.replace(/["']$/, "").replace(/[\s\r\n]+$/, "");

  // Remove any extra <p> or <br> tags that may have been left
  return description
    .replace(/<p>\s*<\/p>/g, "") // Remove empty <p> tags
    .replace(/<br\s*\/?>\s*/g, ""); // Remove <br> tags
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const episodesList = document.getElementById("episodes-list");

    // Filter items where the title starts with "DND Americana"
    const filteredItems = data.items.filter((item) =>
      item.title.startsWith("DND Americana")
    );

    filteredItems.forEach((item) => {
      const cleanedDescription = cleanDescription(item.description);
      const episodeItem = document.createElement("div");
      episodeItem.innerHTML = `
        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
        <p>${item.pubDate}</p>
        <p>${cleanedDescription.trim()}</p>
      `;
      episodesList.appendChild(episodeItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching the RSS feed:", error);
  });
