"use strict";
var MemoryApp = {
    
    cardArray: [],
    click: 0,
    prevCard: null,
    currentCard: null,
    
    init: function(rows, cols){
        var randomResult = RandomGenerator.getPictureArray(rows, cols);
        
        this.memoryBoard(rows, cols, randomResult);
    },
    
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
        var that = this;
        this.click++;
        if (this.click === 1) {
            this.prevCard = card;
        }
        if (this.click === 2) {
            this.currentCard = card;
            if (this.prevCard.getId() === this.currentCard.getId()) {
                console.log("succes");
                this.click = 0;
            }
            else{
                setTimeout(function() {
                    that.prevCard.getReset();
                    that.currentCard.getReset();       
                }, 1000);
                this.click = 0;
            }
        }
    }
};

window.onload = function(){
    MemoryApp.init(4,4);    
};