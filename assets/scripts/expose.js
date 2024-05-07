// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const playButton = document.querySelector("button");
  const hornSelect = document.querySelector("#horn-select");
  const hornImage = document.querySelector("#expose > img");
  const volumeSlider = document.querySelector("#volume-controls > input");
  const volumeImage = document.querySelector("#volume-controls > img");
  const audio = document.querySelector("audio");
  const jsConfetti = new JSConfetti()

  playButton.addEventListener('click', function() {
    console.log(audio.currentSrc);
    if (hornSelect.value === "air-horn" || hornSelect.value === "car-horn") {
      audio.currentTime = 0;
      audio.play();
    }
    else if (hornSelect.value === "party-horn") {
      audio.currentTime = 0;
      audio.play();
      jsConfetti.addConfetti()
    }
    
  }) 

  hornSelect.addEventListener('change', function() {
    if (this.value == "air-horn") {
      hornImage.src = "./assets/images/air-horn.svg";
      audio.src = "./assets/audio/air-horn.mp3";
    }
    else if (this.value == "car-horn") {
      hornImage.src = "./assets/images/car-horn.svg";
      audio.src = "./assets/audio/car-horn.mp3";
    }
    else {
      hornImage.src = "./assets/images/party-horn.svg";
      audio.src = "./assets/audio/party-horn.mp3";
    }
  })

  volumeSlider.addEventListener('input', function() {
    if (volumeSlider.value == 0) {
      volumeImage.src = "./assets/icons/volume-level-0.svg";
    }
    else if (volumeSlider.value < 33) {
      volumeImage.src = "./assets/icons/volume-level-1.svg";
    }
    else if (volumeSlider.value < 66) {
      volumeImage.src = "./assets/icons/volume-level-2.svg";
    }
    else {
      volumeImage.src = "./assets/icons/volume-level-3.svg";
    }
    audio.volume = volumeSlider.value/100;
  }) 
}