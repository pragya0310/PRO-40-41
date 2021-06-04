class Game{
    constructor(){}
    getState(){
        /**
         * spelling mistake of gamestate should be gameState
         */
        database.ref('gameState').on('value',function(data){
            gameState = data.val();
        });
    }
    update(state){
        database.ref('/').update({
            "gameState":state
        });
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                //player.getCount();// Not needed because you wrote it in line-19
            }
            form = new Form()
            form.display();

        }
        player1 = createSprite(200,500)  ;
        player1.addImage("player1", player_img);

        player2 = createSprite(800,500)  ;
        player2.addImage("player2", player_img);
        players = [player1, player2];

    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        //Spelling mistake Image should be image
        image(back_img,0,0,1000,800)
        var x = 100
        var y = 200
        var index = 0;
        drawSprites();

        for(var plr in allPlayers){

            index = index + 1;
            x = 500 - allPlayers[plr].distance;
            y = 500;
            //should be players
            players[index -1].x = x
            players[index-1].y = y;
            
            if(index === player.index){
                fill("black");
                textSize(25);
                text(allPlayers[plr].name, x + 25, y + 25);

                
            }
            textSize(30)
fill("white")
if(index==1){text(allPlayers[plr].score, 50,50)}
else if(index==2){text(allPlayers[plr].score, 950,50)}
        }
console.log(allPlayers)

        /*textSize(25);
        fill("white")
        text("player 1:"+allPlayers.player1.score, 50,50)
        text("player 2:"+allPlayers.player2.score,50,100)
*/
        if (keyIsDown(RIGHT_ARROW) && player.index != null){
            player.distance -= 10;
            player.update();
        }

        if (keyIsDown(LEFT_ARROW) && player.index != null){
            player.distance += 10;
            player.update();
        }
        if (frameCount % 20 === 0){
           
            var x = Math.round(random(100, 1000))
            var fruits = createSprite(x, 0, 100, 100);
            fruits.velocityY = 6;
            /**
             * random error was because of the variable you created on line 84 it was same spelling as the function
             * i changed it to random1
             */
            var random1 = Math.round(random(1,5));
            /**
             * All spelling mistakes for fruits in the cases, you wrote friuts instead of fruits
             */
            switch(random1){
                case 1: fruits.addImage(fruit1_img);
                break;
                case 2: fruits.addImage(fruit2_img);
                break;
                case 3: fruits.addImage(fruit3_img);
                break;
                case 4: fruits.addImage(fruit4_img);
                break;
                case 5: fruits.addImage(fruit5_img);
                break;
            }
            fruitGroup.add(fruits);

            if(player.index !== null){
                for(var i=0; i<fruitGroup.length;i++){
                    if(fruitGroup.get(i).isTouching(players)){
                        fruitGroup.get(i).destroy();
                        player.score=player.score+1;
                        player.update();
                    }
                }
            }
        }
    }


}