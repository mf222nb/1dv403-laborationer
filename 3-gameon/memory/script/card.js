"use strict";
function Card(cardId, memory){
    
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    a.appendChild(img);
    td.appendChild(a);
    img.src = "memory/pics/0.png";
    var that = this;
    
    a.addEventListener("click", function(){
        img.src="memory/pics/" + cardId + ".png";
        memory.flipCard(that);
    }, false);
    
    this.getTd = function(){
        return td;
    };
    
    this.getId = function(){
        return cardId;
    };
    
    this.flip = function(){
        return img.src="memory/pics/" + cardId + ".png";
    };
    
    this.getReset = function() {
        return img.src = "memory/pics/0.png";
    };
}