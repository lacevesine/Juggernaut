let winWidth = 800;
let winHeight = 800;
let environment;

function preload(){
  environment = loadImage('map.png');
}

function setup() {
  // Create the canvas (adjust width and height as needed)
  let canvas = createCanvas(winWidth, winHeight);
  fullscreen(true);
}

function draw(){
  background(51);
  // image(environment, 0, 0, 300, 300)
  for(let x = 0; x < environment.width; x++){
    for(let y = 0; y < environment.height; y++){
      let cellWidth = winWidth/environment.width
      let cellHeight = winHeight/environment.height
      //if(environment.get(x, y)[0] > 0){
        rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight)
      //}
      print()
    }
  }
  
}