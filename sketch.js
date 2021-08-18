const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var Bridge;
var jointpoint;
var stones = []
for (var i = 0 <= 8; i++) {
  var x = random(width/2-200, width/2+300);
  var y = random(-10, 140);
  stones.push(stone);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

bridge = new Bridge();
jointpoint = new jointpoint();
Matter.Composite.add(bridge.Body, jointpoint);
jointLink = new Link(bridge, jointpoint);

}

function draw() {
  background(51);
  Engine.update(engine);
  stones.display();

}
