    var player = {
      x: 200,
      y: 200,
      w: 40,
      h: 40,
      speed: 10,
    direction: "right"
    };
    
    function drawPlayer(context, picture) {
        var x = player.x - (player.w / 2);
        var y = player.y - (player.h / 2);
        if(player.direction == "right"){context.drawImage(picture, 0, 0, 50, 35.5, x, y, 50, 35.5)};
        if(player.direction == "left"){context.drawImage(picture, 50, 0, 50, 35.5, x, y, 50, 35.5)};
    };
    
    var keysDown = {};
    
    function movePlayer(direction){
      switch (direction){
        case "left":
            player.x -= player.speed;
              if(player.x < 20){
                  player.x = 20;
              }
            break;
        case "right":
            player.x += player.speed;
              if(player.x > 380){
                  player.x = 380;
              }
            break;
        case "up":
            player.y -= player.speed;
              if(player.y < 20){
                  player.y = 20;
              }
            break;
        case "down":
            player.y += player.speed;
              if(player.y > 380){
                  player.y = 380;
              }
            break;
      }  
    };
    
    window.addEventListener('keydown', function(e){
        keysDown[e.keyCode] = true;
    
    });
    
    window.addEventListener('keyup', function(e){
      delete keysDown[e.keyCode];
        
    });
    
    function reset(){
        player.x = 200;
        player.y = 200;
        player.w = 40;
        player.h = 40;
        player.speed = 10;
        var i = 0;
         do{
           enemies.push(createEnemy());
       } while(enemies.length<4);
    };
    
  
    function changeSpeed(amount){
        console.log("testing changeSpeed");
           switch(amount){
        case "add":
            player.speed = 29;
            console.log("testing add " + player.speed);
            break;
        case "reduce":
            player.speed = 5;
            console.log("testing reduce " + player.speed);
            break;
        }
    };
   
    
    

    
    
