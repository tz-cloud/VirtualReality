let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ], ufos = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let rocket = new Rocket(rnd(-20,20), 3, rnd(-20,20), rnd(1,2));
    rockets.push(rocket);
  }

  for(let i = 0; i < 20; i++){
    let ufo = new Ufo(rnd(-20,20), rnd(10,20), rnd(-20,20), rnd(1, 2));
    ufos.push(ufo);
    if(ufo.y < 3){
      ufo.y = 3;
    }
  }
  

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    ufo.invade();
  }

  window.requestAnimationFrame( loop );
}
