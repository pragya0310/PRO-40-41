class Player{
    constructor(){
        this.index = null;
        this.distance = 0;//NOT NEEDED
        this.name = null;
        this.score = 0;
    }

    getCount(){
        /*
            var playerCountRef= database.ref("playerCount")
            playerCountRef.on("value",(data) => {
            playeraCount = data.val();

            (data)=>{} used only if you change a class obj, should used function(data){}
        */
        database.ref("playerCount").on("value",function(data){
            playeraCount = data.val();       
        });


    }
    updateCount(count){
        database.ref("/").update({
            "playerCount": count
        });
    }
    update(){
        //Here it should be players/player
        var playerIndex='players/player'+this.index;
        /**
         * Deleted distance:this.distance, this as not needed
         * also changed set to update as set would replace everything in your firebase code
         */
        database.ref(playerIndex).update({
            "name": this.name,
            "score": this.score,"distance":this.distance
        });
    }
    static getPlayerInfo(){
        /**
         * spelling mistake plauyers instead of players
         * (data)=>{} used only if you change a class obj, should used function(data){}
         */
        var playerInfoRef = database.ref('players');
        playerInfoRef.on('value',function(data){
            allPlayers=data.val();
        });
    }
}