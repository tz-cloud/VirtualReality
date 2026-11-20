let maze = [
  "xxxxxxxxxxxxxx-xxxxxxx",
  "x-----ox-------------x",
  "x---x--x-xxx-x-xxx-x-x",
  "x---x--x-x-x-x---x-xox",
  "x---xxxx-x---x-----x-x",
  "x--------xxx-x-xxx---x",
  "xx-xxxxx---x---x---x-x",
  "x-t--------xxx-x-xxx-x",
  "x-x-------------t----x",
  "x-x-xxxxxxxxxxxxxxxx-x",
  "xo--x----------------x",
  "xxx-xxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "t"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})