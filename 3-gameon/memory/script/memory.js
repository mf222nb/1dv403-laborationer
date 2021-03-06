"use strict";
var MemoryApp = function(divId){
    
    var cardArray = [];
    var click = 0;
    var prevCard = null;
    var currentCard = null;
    var tries = 0;
    var that = this;
    
    this.init = function(rows, cols){
        var randomResult = RandomGenerator.getPictureArray(rows, cols);
        
        that.memoryBoard(rows, cols, randomResult);
    };
    
    //Skapar en tabell och ett nytt kort och lägger in kortet i en array och lägger in de olika table elementen i varandra
    this.memoryBoard = function(rows, cols, pictureArray){
        var table = document.createElement("table");
        var main = document.getElementById("main");
        var index = 0;
        
        table.id = ("table");
        table.className = ("table");
        
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");

            for (var n = 0; n < cols; n++) {
                var card = new Card(pictureArray[index], that);
                cardArray.push(card);

                tr.appendChild(card.getTd());
                index++;
            }
            table.appendChild(tr);
        }
        main.appendChild(table);
    };
    
    this.flipCard = function(card){
        //Gör att man inte kan klicka på mer än två kort samtidigt
        if (prevCard !== null && currentCard !== null) {
            return;
        }
        
        click++;
        
        //När man klickar en gång på ett kort så vänds det upp
        if (click === 1) {
            card.flip();
            prevCard = card;
            return;
        }
        //När man klickar på ett andra kort så vänds det upp
        if (click === 2) {
            card.flip();
            currentCard = card;
            
            //Gämför om det är två likadana kort
            if (prevCard.getId() === currentCard.getId()) {
                click = 0;
                prevCard = null;
                currentCard = null;
            }
            else{
                //Låter korten vara uppe en viss tid
                setTimeout(function() {
                    prevCard.getReset();
                    currentCard.getReset();
                    prevCard = null;
                    currentCard = null;
                }, 1000);
            }
            click = 0;
            that.score(tries++);
        }
    };
    //Skriver ut en liten text med antal försök det tar att klara spelet
    this.score = function(tries){
        var scoreBox = document.createElement("div");
        var main = document.getElementById("main");
        var p = document.getElementById("pTag").innerHTML = "Antal försök: " + tries;
        
        scoreBox.appendChild(p);
        main.appendChild(scoreBox);
    };
};

window.onload = function(){
    new MemoryApp("hej").init(4,4);
    new MemoryApp("tja").init(4,4);
};