"use strict";
function Card(cardId, memory){
    
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    a.href="#";
    a.appendChild(img);
    td.appendChild(a);
    img.src = "memory/pics/0.png";
    var that = this;
    
    a.onclick = function(){
        memory.flipCard(that);
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
        img.src="memory/pics/" + cardId + ".png";
    };
    
    //Vänder tillbaka ett kort
    this.getReset = function() {
        a.onclick = function(){
            memory.flipCard(that);
        };
        img.src = "memory/pics/0.png";
    };
}