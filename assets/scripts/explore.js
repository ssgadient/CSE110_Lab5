// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;
  const smilingFace = document.querySelector("img");
  const voiceSelect = document.querySelector("#voice-select");
  const textArea = document.querySelector("textarea");
  const playButton = document.querySelector("button");

  // Generate voicelist
  let voices = [];

  synth.onvoiceschanged = function() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Play voice
  playButton.addEventListener('click', function() {
    if (voiceSelect.value !== "select") {
      const utterance = new SpeechSynthesisUtterance(textArea.value);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterance.voice = voices[i];
        }
      }
      synth.speak(utterance);

      utterance.onstart = (event) => {
        smilingFace.src = 'assets/images/smiling-open.png';
      };

      utterance.onend = (event) => {
        smilingFace.src = 'assets/images/smiling.png';
      };

    }

  }) 

}