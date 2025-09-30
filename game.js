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
  Image(environment, 0, 0, 300, 300)
}