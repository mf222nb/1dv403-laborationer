"use strict";
var MemoryApp = {
    
    cardArray: [],
    click: 0,
    prevCard: null,
    currentCard: null,
    tries: 0,
    
    init: function(rows, cols){
        var randomResult = RandomGenerator.getPictureArray(rows, cols);
        
        this.memoryBoard(rows, cols, randomResult);
    },
    
    //Skapar en tabell och ett nytt kort och lägger in kortet i en array och lägger in de olika table elementen i varandra
    memoryBoard: function(rows, cols, pictureArray){
        var table = document.createElement("table");
        var main = document.getElementById("main");
        var index = 0;
        var that = this;
        
        table.id = ("table");
        table.className = ("table");
        
        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");

            for (var n = 0; n < cols; n++) {
                var card = new Card(pictureArray[index], that);
                that.cardArray.push(card);

                tr.appendChild(card.getTd());
                index++;
            }
            table.appendChild(tr);
        }
        main.appendChild(table);
    },
    
    flipCard: function(card){
        //Gör att man inte kan klicka på mer än två kort samtidigt
        if (this.prevCard !== null && this.currentCard !== null) {
            return;
        }
        
        var that = this;
        this.click++;
        
        //När man klickar en gång på ett kort så vänds det upp
        if (this.click === 1) {
            card.flip();
            this.prevCard = card;
            
            return;
        }
        //När man klickar på ett andra kort så vänds det upp
        if (this.click === 2) {
            card.flip();
            this.currentCard = card;
            
            //Gämför om det är två likadana kort
            if (this.prevCard.getId() === this.currentCard.getId()) {
                this.click = 0;
                this.prevCard = null;
                this.currentCard = null;
            }
            else{
                //Låter korten vara uppe en viss tid
                setTimeout(function() {
                    that.prevCard.getReset();
                    that.currentCard.getReset();
                    that.prevCard = null;
                    that.currentCard = null;
                }, 1000);
            }
            this.click = 0;
            this.score(this.tries++);
        }
    },
    //Skriver ut en liten text med antal försök det tar att klara spelet
    score: function(tries){
        var scoreBox = document.createElement("div");
        var main = document.getElementById("main");
        var p = document.getElementById("pTag").innerHTML = "Antal försök: " + this.tries;
        
        scoreBox.appendChild(p);
        main.appendChild(scoreBox);
    }
};

window.onload = function(){
    MemoryApp.init(4,4);
    MemoryApp.init(2, 2);
};