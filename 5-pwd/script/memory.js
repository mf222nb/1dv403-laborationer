"use strict";
function MemoryApp(rows, cols){

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
    
    this.memoryBoard = function(rows, cols, pictureArray){
        var table = document.createElement("table");
        var aside = document.createElement("aside");
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
        aside.appendChild(table);
    };
    
    this.flipCard = function(card){
        if (prevCard !== null && currentCard !== null) {
            return;
        }
        
        click++;
        
        if (click === 1) {
            card.flip();
            prevCard = card;
            return;
        }
        if (click === 2) {
            card.flip();
            currentCard = card;
            
            if (prevCard.getId() === currentCard.getId()) {
                click = 0;
                prevCard = null;
                currentCard = null;
            }
            else{
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
    this.score = function(tries){
        var scoreBox = document.createElement("div");
        var main = document.getElementById("main");
        var p = document.getElementById("pTag").innerHTML = "Antal försök: " + tries;
        
        scoreBox.appendChild(p);
        main.appendChild(scoreBox);
    };
}