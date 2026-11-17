let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dudes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i = 0; i < 50; i++){
    dudes.push(new Dude(rnd(-5,5), 1, rnd(-5,5)));
  }

  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let i = 0; i < dudes.length; i++){
    dudes[i].jump();
  }
  window.requestAnimationFrame( loop );
}