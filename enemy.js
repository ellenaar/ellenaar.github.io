    var enemies = [];

    function createEnemy() {
        var enemy = {
            x: getRandomInt(0, 365),
            y: getRandomInt(0, 365),
            w: 35,
            h: 35,
            speed: getRandomInt(1, 19),
            direction: randomDirection()
        }
        return enemy
    };
    
   function create(){
       for(var i = 0; i<4; i++){
           enemies.push(createEnemy())
       }
    };
       
    function drawEnemy(context, enemy, picture){
        if(enemy.direction == "right"){context.drawImage(picture, 0, 35.5, 50, 35.5, enemy.x, enemy.y, 50, 35.5)};
        if(enemy.direction == "left"){context.drawImage(picture, 50, 35.5, 50, 35.5, enemy.x, enemy.y, 50, 35.5)};
         if(enemy.direction == "up"){context.drawImage(picture, 0, 35.5, 50, 35.5, enemy.x, enemy.y, 50, 35.5)};
        if(enemy.direction == "down"){context.drawImage(picture, 50, 35.5, 50, 35.5, enemy.x, enemy.y, 50, 35.5)};
        
    };


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
};

    function randomDirection(){
        var direction = getRandomInt(0, 3)
        if(direction == 0) return "right"
        if(direction == 1) return "left"
        if(direction == 2) return "up"
        if(direction == 3) return "down"
    };

    function moveEnemy(direction, enemy){
        switch (direction){
        case "left":
            enemy.x -= enemy.speed;
              if(enemy.x < 0){
                  enemy.x = 0;
                  enemy.direction = "right";
              }
                for(var i = 0; i<enemies.length; i++){
                     console.log("moikkamoi1");
                    if(enemies[i].x == (player.x+50)){
                         console.log("moikkamoi2");
                        enemies[i].direction = "right";
                        console.log("moikkamoi3");
                    }
                }
            break;
        case "right":
            enemy.x += enemy.speed;
              if(enemy.x > 365){
                  enemy.x = 365;
                  enemy.direction = "left";
              }
            break;
        case "up":
            enemy.y -= enemy.speed;
              if(enemy.y < 0){
                  enemy.y = 0;
                  enemy.direction = "down";
              }
            break;
        case "down":
            enemy.y += enemy.speed;
              if(enemy.y > 365){
                  enemy.y = 365;
                  enemy.direction = "up";
              }
            break;
      }  
    };
    
    
