class Ufo{
  constructor(x,y,z,speed){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = speed;

    this.obj = document.createElement("a-entity");

        let body = document.createElement("a-sphere");
        body.setAttribute("color", "#737e80");
        body.setAttribute("rotation", {x:90, y:0, z:0});
        body.setAttribute("scale", {x:2.5, y:2.5, z:0.5});
        this.obj.append(body);

        let bubble = document.createElement("a-sphere");
        bubble.setAttribute("scale", {x:1.5, y:1.25, z:1.5});
        bubble.setAttribute("color","#71e3f0");
        bubble.setAttribute("transparent", true);
        bubble.setAttribute("opacity", 0.85);
        this.obj.append(bubble);

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append( this.obj );
  }

  invade(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}