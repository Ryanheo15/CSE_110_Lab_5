// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  //Query selectors
  let hornImg = document.querySelector("img");
  let select = document.querySelector("select");
  let audio = document.querySelector("audio");
  let volume = document.querySelector("#volume");
  let volumeImg = document.querySelector("#volume-controls img");
  let playButton = document.querySelector("button");

  let partyHorn = false;

  //Event handlers
  select.addEventListener("change", function() {
    audio.className = "";

    switch(this.value){
      case "air-horn":
        hornImg.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        partyHorn = false;
        break; 
      case "car-horn": 
        hornImg.src = "assets/images/car-horn.svg"; 
        audio.src = "assets/audio/car-horn.mp3";
        partyHorn = false;
        break; 
      case "party-horn": 
        hornImg.src = "assets/images/party-horn.svg";
        audio.src = "assets/audio/party-horn.mp3";
        partyHorn = true;
    }
  });

  volume.addEventListener("change", function(){
    audio.volume = volume.value/100;

    if(volume.value == 0){
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume.value >= 1 && volume.value < 33){
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume.value >= 33 && volume.value < 67){
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener("click", function(){
    audio.play();
    if(partyHorn === true){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  })

}