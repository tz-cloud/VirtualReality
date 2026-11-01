class Cloud{
    constructor(x, y ,z){
        this.obj = document.createElement("a-entity");
       
        let puff = document.createElement("a-sphere");
        puff.setAttribute("radius", 0.8);
        puff.setAttribute("position", "0, 1, -3");
        this.obj.append(puff);


        let puff1 = document.createElement("a-sphere");
        puff1.setAttribute("radius", 0.6);
        puff1.setAttribute("position", "-0.5, 0.9, -3");
        this.obj.append(puff1);


        let puff2= document.createElement("a-sphere");
        puff2.setAttribute("radius", 0.6);
        puff2.setAttribute("position","0.5, 0.9, -3");
        this.obj.append(puff2);


        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append(this.obj);
    }
}


