let img;
function setup() {
  createCanvas(500,500);
  img=loadImage('bolitaroja.jpg');
}
function draw() {
  background(255);
  image(img,0,0,200,150);
}
