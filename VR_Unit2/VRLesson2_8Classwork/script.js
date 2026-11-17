let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0; //starts standing up straight
  target.da = -1; //fall speed & direction

  loop();
})

function loop(){
  if(target.a > -90){
  target.a += target.da;
  }else{
    target.a = -90;
  }
  target.setAttribute("rotation",{x:target.a, y:0, z: 0});

  window.requestAnimationFrame( loop );
}