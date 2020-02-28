// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
    constructor(cubeProperties){
    this.length = cubeProperties.length;
    this.width = cubeProperties.width;
    this.height = cubeProperties.height;
    }

    volume (){
       return this.length * this.width * this.height;

    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

  }
//VOLUME METHOD
//   CuboidMaker.prototype.volume = function(properties){
//     return this.length * this.width * this.height;
//   };

//SURFACE AREA METHOD
//   CuboidMaker.prototype.surfaceArea = function (properties){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//    }


//STRETCH GOAL EXTEND CUBOID TO subCLASS
class CubeMaker extends CuboidMakerClass{
    constructor(cubeProps){
        super(cubeProps);
        this.surfaceArea = cubeProps.area;
        
    }
    volumeForCube(cubeProps){
        return 
    }
    surfaceAreaForCube(){

    }
}


//CUBOID CONST
   const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5,
  });
//CUBE CONST
const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4,
})

 
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

console.log(cube.volumeForCube());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.