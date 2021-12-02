class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
            
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    players=[player1];

        }
    
    play(){
        

                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                       //add code to display the player's name on the respective basket.
                     textSize(35)
                       fill (0)
                       stroke (0)
                       text(allPlayers[plr].name,x-25,y+25)
                         
                     }
                fill("white")
                    textSize(30)
                    text("player1 :"+allPlayers.player1.score,50,50 )
                   // text("player2 :"+allPlayers.player2.score,540,50 )
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     treasure = createSprite(random(100, 1000), 0, 100, 100);
                     treasure.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: treasure.addImage("treasure1",treasure1_img);
                         break;
                         case 2: treasure.addImage("treasure1", treasure2_img);
                         break;
                         case 3: treasure.addImage("treasure1", treasure3_img);
                         break;
                         case 4: treasure.addImage("treasure1", treasure4_img);
                         break;

                     }
                     treasureGroup.add(treasure);
                     
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < treasureGroup.length; i++) {
                        if (treasureGroup.get(i).isTouching(players)) {
                            treasureGroup.get(i).destroy();
                         player.score=player.score+1
                            player.update()
                        }
                        
                    }
                  }   

                  if(this.score === 50){
                this.question4.html("4. Everyone has it and no one can lose it,what is it?");
                this.question4.style('color' , 'lavender');
                this.question4.position(150, 200);

                this.option13.html("Name");
                this.option13.position(150, 350);

                this.option14.html("Shadow");
                this.option14.position(150, 400);

                this.option15.html("");
                this.option15.position(150, 450);

                this.option16.html("");
                this.option16.position(150, 500); 

                this.option13.mousePressed(()=>{
                    this.question4.hide();
                    this.option13.hide();
                    this.option14.hide();
                    this.option15.hide();
                    this.option16.hide();
                })
              }
            

    }
    end(){
       console.log("Game Ended");
    }
}
