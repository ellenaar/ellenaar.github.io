$(document).ready(function() {
    
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    document.body.appendChild(canvas);
    var pictureReady = false;
    var picture = new Image();
    
    picture.onload = function() {
       pictureReady = true; 
    };
    
    picture.src = "FlyingGame.png";
    
      function update(){
        
        if(38 in keysDown){
            movePlayer('up');
        }
        if(40 in keysDown){
            movePlayer('down')
           
        }
        if(37 in keysDown){
            movePlayer('left')
            player.direction = "left";
        }
        if(39 in keysDown){
            movePlayer('right')
            player.direction = "right";
        }
       
          for(i = 0; i<enemies.length; i++){
            moveEnemy(enemies[i].direction, enemies[i]); 
              avoidPlayer(enemies[i]);
        };
         
      };
    
    canvas.addEventListener("mousedown", function(){
        enemies.splice(0,1);
    });
    
    var render = function() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, 400, 400);
        if(pictureReady){
           drawPlayer(ctx, picture);
        };
        for(i = 0; i<enemies.length; i++){
          drawEnemy(ctx, enemies[i], picture);  
        };
    };
    
    function main() {
        update();
        render(); 
        requestAnimationFrame(main);
    };
    
    create();
    main();
    
    $("#add").click( function()
           {
        changeSpeed("add");
    });
    
    $("#reduce").click( function()
           {
        changeSpeed("reduce");
    });
    
    $("#reset").click( function()
           {
        reset();
    });
    
});  
   