let scene, car, pokemonball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");


    car = document.querySelector("#car");
    car.x = 0;
    car.dx = 0.01;


    pokemonball = document.querySelector("#pokemonball");
    pokemonball.x = 0;
    pokemonball.dx = 1;


    rocket = document.querySelector("#rocket");
    rocket.y = 0;
    rocket.dy = 0.02;


    dude = document.querySelector("#dude");
    dude.y = 1;
    dude.dy = 0.04;


    sun = document.querySelector("#sun");
    sun.a = 0;
    sun.da = 0.01;


    loop();
   
})


function loop(){


    //Make the car move to the left.
    car.x -= car.dx;
    car.setAttribute("position", {x:car.x, y:0, z:0});
    // Make the pokemonball rotate on the x axis
    pokemonball.x += pokemonball.dx;
    pokemonball.setAttribute("rotation", {x:pokemonball.x, y:0, z:0 });
    // Make the rocket fly up.
    rocket.y += rocket.dy;
    rocket.setAttribute("position", {x:0, y:rocket.y, z:0});
    // Make the dude grow
    dude.y += dude.dy;
    dude.setAttribute("scale", {x: 1, y:dude.y, z: 1});
    // Make the sun fade in
    sun.a += sun.da;
    sun.setAttribute("opacity", sun.a);


    window.requestAnimationFrame(loop);
}



