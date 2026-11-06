class Rocket{
  constructor(x,y,z,speed){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = speed;
    // <a-cone radius-top="0" radius-bottom="0.5" height="1" color="red" position="0 0 -2"></a-cone>
    //   <a-cylinder radius="0.5" height="2" color="gray" position="0 -1.5 -2"></a-cylinder>
    //   <a-cone radius-top="0" radius-bottom="0.25" height="2" color="orange" position="0 -3.5 -2" rotation="-180 0 0"></a-cone>
    this.obj = document.createElement("a-entity");

        let top = document.createElement("a-cone");
        top.setAttribute("radius", 0.5);
        top.setAttribute("radius-bottom", 0.5);
        top.setAttribute("height", 1);
        top.setAttribute("color", "red");
        top.setAttribute("position", {x:0, y: 0, z:-2});
        this.obj.append(top);

        let body = document.createElement("a-cylinder");
        body.setAttribute("radius", 0.5);
        body.setAttribute("height", 2);
        body.setAttribute("color", "gray");
        body.setAttribute("position", {x:0, y:-1.5, z:-2});
        this.obj.append(body);

        let bottom = document.createElement("a-cone");
        bottom.setAttribute("radius-top", 0);
        bottom.setAttribute("radius-bottom", 0.25);
        bottom.setAttribute("height", 2);
        bottom.setAttribute("color", "orange");
        bottom.setAttribute("position", {x:0, y:-3.5, z:-2});
        bottom.setAttribute("rotation", {x:-180, y:0, z:0});
        this.obj.append(bottom);

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append( this.obj );
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}