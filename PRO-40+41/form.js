class Form{
    constructor(){
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.reset = createButton("RESET");
        this.welcome = createElement("h2")
        this.title = createElement("h2")
    }
    hide(){
        this.welcome.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
     display(){
        this.title.html("FRUIT CATCHER")
        this.title.position(150, 50)
    
        this.input.position(550, 400)
        this.button.position(560, 500)   
        this.reset.position(900, 660)   
        
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.welcome.html("HELLO" + player.name)
            this.welcome.position(400, 250);
        
        })
    }

}
