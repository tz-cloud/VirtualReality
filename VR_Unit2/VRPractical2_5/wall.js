class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("src", "#wall");
    this.obj.setAttribute("repeat", "1 3");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("height", 3);
    scene.append(this.obj);

  }
}