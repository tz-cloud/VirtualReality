class Mech{
    constructor(x, y, z, speed){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = speed;

        this.obj = mechTemplate.cloneNode(true);
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        scene.append(this.obj);
    }
    launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}