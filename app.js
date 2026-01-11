const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const voiceBtn = document.getElementById("voiceBtn");

fileInput.addEventListener("change", () => {
  fileList.innerHTML = "";
  [...fileInput.files].forEach(file => {
    const li = document.createElement("li");
    li.textContent = file.name;
    fileList.appendChild(li);
  });
});

/* Voice Commands */
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";

  voiceBtn.onclick = () => {
    recognition.start();
    voiceBtn.textContent = "Listening...";
  };

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    voiceBtn.textContent = "🎙 Voice Command";

    if (command.includes("upload")) {
      fileInput.click();
    } else if (command.includes("clear")) {
      fileList.innerHTML = "";
    } else {
      alert("Voice command heard: " + command);
    }
  };

  recognition.onerror = () => {
    voiceBtn.textContent = "🎙 Voice Command";
  };
} else {
  voiceBtn.disabled = true;
  voiceBtn.textContent = "Voice Not Supported";
}
