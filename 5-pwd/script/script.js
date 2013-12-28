"use strict";

var Desktop = {
    init: function(){
        var that = this;
        var img = document.getElementById("img");
        var count = 0;
        
        img.addEventListener("click", function(){
            that.createWindow(count++);
        },false);
    },
    
    createWindow: function(count){
        var that = this;
        var main = document.getElementById("main");
        
        var header = document.createElement("header");
        var article = document.createElement("article");
        var aside = document.createElement("aside");
        var icon = document.createElement("img");
        var closeButton = document.createElement("a");
        var footer = document.createElement("footer");
        var text = document.createTextNode("Image Viewer");
        
        footer.setAttribute("class", "footer");
        header.setAttribute("class", "header");
        aside.setAttribute("class", "aside");
        article.setAttribute("class", "article");
        closeButton.setAttribute("class", "delete");
        closeButton.setAttribute("id", "delete");
        icon.setAttribute("src", "pics/pics_32x32.png");
        
        article.appendChild(header);
        header.appendChild(icon);
        header.appendChild(text);
        header.appendChild(closeButton);
        article.appendChild(aside);
        article.appendChild(footer);
        main.appendChild(article);
        
        closeButton.addEventListener("click", function() {
            that.removeWindow(article);
        }, false);
    },
    
    removeWindow: function(article){
        article.parentNode.removeChild(article);
    },
};

window.onload = function(){
    Desktop.init();
};