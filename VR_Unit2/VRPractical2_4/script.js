let rnd = (l,u) => Math.random()*(u-l) + l;
let scene, rockets = [ ], ufos = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let rocket = new Rocket(rnd(-20,20), 3, rnd(-20,20), rnd(0.1, 0.5));
    rockets.push(rocket);
  }

  for(let i = 0; i < 20; i++){
    let ufo = new Ufo(rnd(-20,20), rnd(10,20), rnd(-20,20), rnd(0.01, 0.05));
    ufos.push(ufo);
  }
  

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    if (ufo.y > 1) {
      ufo.invade();
    }
  }

  window.requestAnimationFrame( loop );
}
