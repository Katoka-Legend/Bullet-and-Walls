var bullet



function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90)
  weight = random(400,1500)
  thickness = random(22,83)

  bullet = createSprite(200, 200, 25, 25);
  bullet.shapeColor = 'white'

  wall = createSprite(1200,200,thickness,200)
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed 

}

function draw() {
  background("black"); 
  drawSprites();

  bullet.collide(wall)
  if (bullet.x > 1100 ) {
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    // console.log(bullet.isTouching(wall))
    console.log(damage)
    if (damage > 10){
      bullet.shapeColor = 'green'
    }
    
    else if (damage <10){
      bullet.shapeColor = 'yellow'
    }

  }
}



