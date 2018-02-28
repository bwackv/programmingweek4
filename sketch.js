/*
https://vimeo.com/channels/learningp5js/138327559 
*/
var s = function (p) {
var spot = {
  x: 100,
  y: 50
}


var col = {
  r: 255,
  g: 0,
  b: 0
}
p.setup = function(){
  p.createCanvas(400, 400);
  p.background(0);
}

p.draw = function() {
  col.r = p.random(200, 255);
  col.g = p.random(200, 255);
  col.b = p.random(200, 255);
  
  spot.x = p.random(0, 400);
  spot.y = p.random(0, 400);
  p.noStroke();
  p.fill(col.r, col.g, col.b, 200);
  p.ellipse(spot.x, spot.y, 24, 24);
 }
 p.frameRate(5);
}
var myp5 = new p5(s, 'c1');

var t = function (p) {
var spot = {
  x: 100,
  y: 50
}


var col = {
  r: 255,
  g: 0,
  b: 0
}
p.setup = function(){
  p.createCanvas(400, 400);
  p.background(0);
}

p.draw = function() {
col.r = p.random(200, 255);
  col.g = p.random(200, 255);
  col.b = p.random(200, 255);
  
  spot.x = p.random(0, 400);
  spot.y = p.random(0, 400);
  p.noStroke();
  p.fill(col.r, col.g, col.b, 100);
  p.ellipse(spot.x, spot.y, 24, 24);
 }
}
var myp5 = new p5(t, 'c2');
