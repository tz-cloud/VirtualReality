class House{
    constructor(x, y ,z){
        this.obj = document.createElement("a-entity");
 
        let base = document.createElement("a-box");
        base.setAttribute("width", 3);
        base.setAttribute("height", 3);
        base.setAttribute("depth", 3);
        base.setAttribute("color", "#f2dcc2");
        base.setAttribute("position","0, 0.5, 0");
        this.obj.append(base);


        let roof = document.createElement("a-cylinder");
        roof.setAttribute("segments-radial", 3);
        roof.setAttribute("radius", 2);
        roof.setAttribute("height", 3);
        roof.setAttribute("position", "0, 3, 0");
        roof.setAttribute("rotation", "-90, 0, 0");
        roof.setAttribute("color", "red");
        this.obj.append(roof);
       
        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append(this.obj);
    }
}
