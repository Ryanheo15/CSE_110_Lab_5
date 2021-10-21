// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // initializations
  let synth = window.speechSynthesis;
  let voices = synth.getVoices();

  setTimeout(() => {
    voices = window.speechSynthesis.getVoices();
    populateVoices();
  }, 50);

  //query selectors 
  let voice_select = document.querySelector("#voice-select");
  let button = document.querySelector("button");
  let text = document.querySelector("#text-to-speak");
  let img = document.querySelector("img");

  //Event handlers
  button.addEventListener("click", function(){  
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text.value; 

    let selectedOption = voice_select.selectedOptions[0].getAttribute('data-name');

    for(let i = 0; i < voices.length; i++){
      if(voices[i].name === selectedOption){
        utterance.voice = voices[i];
      }
    }

    synth.speak(utterance);

    
    if(synth.speaking == true){
      console.log("hello")
      img.src = "/assets/images/smiling-open.png";
    }

    utterance.addEventListener('end', function(event) {
      img.src = "/assets/images/smiling.png";
    });
  });


  //Functions
  function populateVoices() {
    for(let i = 0; i < voices.length; i++){
      let option = document.createElement("option");
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
  
      voice_select.appendChild(option);
  
    }
  }


}