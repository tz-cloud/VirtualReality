window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
  let scene = document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron> and create it.
  let shape = document.createElement("a-dodecahedron");
  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
  shape.setAttribute("position","2 2 -5");
  shape.setAttribute("radius","2");
  shape.setAttribute("color","red");

  //Challenge 4: Add the <a-dodecahedron> to the scene
  scene.append(shape);


  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
  let shape1 = document.createElement("a-triangle");
  shape1.setAttribute("position","-4 0 -3");
  shape1.setAttribute("color", "blue");
  scene.append(shape1);
})