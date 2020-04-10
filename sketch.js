const {Engine, World, Constraint, Bodies} = Matter;

var engine, world;

var Ceiling, pendulum, sling;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  Ceiling = new Top(400,200,200,20);

  pendulum = new Pendulum(275, 275, 25);

  sling = new hold(pendulum.body, Ceiling.body)
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  pendulum.display();
  Ceiling.display();
  sling.display();
}