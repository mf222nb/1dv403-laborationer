"use strict";
PWD.Classes.Card = function(cardId, memory, aside){
    
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    a.href="#";
    a.appendChild(img);
    td.appendChild(a);
    img.src = "pics/0.jpg";
    var that = this;
    
    //Skickar med en referens av Card till flipCard functionen, när man klickar på en av bilderna.
    a.onclick = function(){
        memory.flipCard(that, aside);
    };
    
    this.getTd = function(){
        return td;
    };
    
    this.getId = function(){
        return cardId;
    };
    
    //Vänder upp ett kort
    this.flip = function(){
        a.onclick = null;
        img.src="pics/" + cardId + ".jpg";
    };
    
    //Vänder tillbaka ett kort
    this.getReset = function() {
        a.onclick = function(){
            memory.flipCard(that);
        };
        img.src = "pics/0.jpg";
    };
};