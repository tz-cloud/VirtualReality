let rnd = (l,u) => Math.random()*(u-l) + l;
let scene, mechTemplate, army = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.getElementById("mech-1");

  for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 5){
      let mech = new Mech(x, 1, z, rnd(0.05, 0.09));
      army.push(mech);
    }
  }

  loop();
})
function loop(){
  for(let mech of army){
    mech.launch();
  }

  window.requestAnimationFrame( loop );
}
