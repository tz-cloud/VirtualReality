let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets=[ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

   for(let i = 0; i < 100; i++){
    let rocket = new Rocket(rnd(-20,20), 3, rnd(-20,20), rnd(1,2));
    rockets.push(rocket);
  }
  

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  window.requestAnimationFrame( loop );
}
