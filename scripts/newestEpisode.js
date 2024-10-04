const rssFeedUrl = "https://anchor.fm/s/ea5c4870/podcast/rss"; // Replace with your RSS feed URL
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  rssFeedUrl
)}&api_key=cxuieooisuopfpxi4qec84f0rfwkwv2tzaf8z3ib&count=1`;

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
    console.log(data.items[0]);
    const newestEpisodeContainer = document.getElementById(
      "newest-episode-container"
    );
    const newestEpisode = data.items[0];

    // Create custom player layout
    newestEpisodeContainer.innerHTML = `
    <div class="audio-player-card">
        <img src="${newestEpisode.thumbnail}" alt="${
      newestEpisode.title
    }" class="thumbnail" />
        <div class="episode-info">
            <div class="info-container">
                <h3 class="episode-title">${newestEpisode.title}</h3>
                <p class="pub-date">${newestEpisode.pubDate.substring(
                  0,
                  10
                )}</p>
                <p class="episode-description">${newestEpisode.description}</p>
            </div>
            <div class="audio-player">
                <audio id="newestEpisodeAudio">
                    <source src="${
                      newestEpisode.enclosure.link
                    }" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <div class="audio-controls">
                    <button id="playPauseBtn">Play</button>
                    <input type="range" id="seekBar" value="0" max="100" class="seek-bar">
                    <span id="currentTime">0:00</span><p>/</p><span id="duration">0:00</span>
                    <button id="muteBtn">Mute</button>
                    <input type="range" id="volumeBar" min="0" max="1" step="0.1" value="1" class="volume-bar">
                </div>
            </div>
        </div>
    </div>
    `;

    const audio = document.getElementById("newestEpisodeAudio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const muteBtn = document.getElementById("muteBtn");
    const seekBar = document.getElementById("seekBar");
    const volumeBar = document.getElementById("volumeBar");

    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    // Play or Pause audio
    playPauseBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
      } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
      }
    });

    // Update the seek bar and current time as the audio plays
    audio.addEventListener("timeupdate", () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;

      // Update the seek bar
      const value = (currentTime / duration) * 100;
      seekBar.value = value;

      // Update the current time display
      currentTimeDisplay.textContent = formatTime(currentTime);
      durationDisplay.textContent = formatTime(duration);
    });

    // Seek to a new position in the audio
    seekBar.addEventListener("input", () => {
      const seekTo = (seekBar.value / 100) * audio.duration;
      audio.currentTime = seekTo;
    });

    // Mute or unmute audio
    muteBtn.addEventListener("click", () => {
      if (audio.muted) {
        audio.muted = false;
        muteBtn.textContent = "Mute";
      } else {
        audio.muted = true;
        muteBtn.textContent = "Unmute";
      }
    });

    // Change the volume
    volumeBar.addEventListener("input", () => {
      audio.volume = volumeBar.value;
    });

    // Format time in MM:SS
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
  })
  .catch((error) => {
    console.error("Error fetching the RSS feed:", error);
  });
