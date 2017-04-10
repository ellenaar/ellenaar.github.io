    var enemies = [];

    function createEnemy() {
        var enemy = {
            x: getRandomInt(0, 365),
            y: getRandomInt(0, 365),
            w: 35,
            h: 35,
            speed: getRandomInt(1, 14),
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
         if(enemy.direction == "up" || enemy.direction == "down"){context.drawImage(picture, 0, 35.5, 50, 35.5, enemy.x, enemy.y, 50, 35.5)};
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

    function avoidPlayer(enemy){
        if(
               ((enemy.x + 1.5 *enemy.w >= player.x &&
                enemy.x <= player.x + player.w/2) &&
                (enemy.y + 1.5*enemy.h >= player.y &&
                enemy.y <= player.y + player.h/2))
           
        ){
            
            if(enemy.direction == "right") enemy.direction = "left";
            else if(enemy.direction == "left") enemy.direction = "right";
            else if(enemy.direction == "down") enemy.direction = "up";
            else if(enemy.direction == "up") enemy.direction = "down";
        }
    };

    function moveEnemy(direction, enemy){
        switch (direction){
        case "left":
            enemy.x -= enemy.speed;
              if(enemy.x < 0){
                  enemy.x = 0;
                  enemy.direction = "right";
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
    
    
