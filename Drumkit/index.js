var crash = new Audio("/sounds/crash.mp3");
var kickBass = new Audio("/sounds/kick-bass.mp3");
var tom1 = new Audio("/sounds/tom-1.mp3");
var tom2 = new Audio("/sounds/tom-2.mp3");
var tom3 = new Audio("/sounds/tom-3.mp3");
var tom4 = new Audio("/sounds/tom-4.mp3");
var snare = new Audio("/sounds/snare.mp3");

//Button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
   sound(this.innerHTML);
   buttonAnimation(this.innerHTML);
  });
}

// Keyboard press
document.addEventListener('keypress',function(event){
  sound(event.key);
  buttonAnimation(event.key);
})

function sound(character){
  switch(character){
    case 'w':
      tom1.play();
      break;
    case 'a':
      tom2.play();
      break;
    case 's':
      tom3.play();
      break;
    case 'd':
      tom4.play();
      break;
    case 'j':
      snare.play();
      break;
    case 'k':
      crash.play();
      break;
    case 'l':
      kickBass.play();
      break;
  }
}

function buttonAnimation(currentKey){
  var activeBtn = document.querySelector("."+ currentKey).classList.add('pressed');
  setTimeout(function(){
    var deactivatedBtn = document.querySelector("."+ currentKey).classList.remove('pressed');
  },100);
  
}