// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constuctor(attr){
      this.length = attr.length;
      this.width = attr.width;
      this.height = attr.height;
    }
    volume(){
      return (this.length * this.width * this.height) 
    }
    surfaceArea(){
      return (2 * (this.length * this.width + this.length * this.height + this.width * this.height))
    }
}

  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5,
  });



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2{
    constructor(attr){
        super(attr)
        this.length2 = attr.length2;
        this.side = attr.side;
    }
    volumeCube(){
      return (this.side * this.length2)
    }
    surfaceAreaCube(){
        return (6 * (this.side))
    }
}

const cube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5,
    length2: 5,
    side: 25,
});

console.log(cube);

console.log(cube.volumeCube());
console.log(cube.surfaceAreaCube());