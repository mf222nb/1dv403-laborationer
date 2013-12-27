"use strict";

var Desktop = {
    init: function(){
        var that = this;
        var img = document.getElementById("img");
        
        img.addEventListener("click", function(){
            that.createWindow();
        },false);
    },
    
    createWindow: function(){
        var main = document.getElementById("main");
        var header = document.createElement("header");
        var article = document.createElement("article");
        var aside = document.createElement("aside");
        var icon = document.createElement("img");
        var closeButton = document.createElement("a");
        var footer = document.createElement("footer");
        var p = document.createTextNode("Image Viewer");
        
        footer.setAttribute("class", "footer");
        header.setAttribute("class", "header");
        aside.setAttribute("class", "aside");
        article.setAttribute("class", "article");
        closeButton.setAttribute("class", "delete");
        closeButton.setAttribute("id", "delette");
        
        icon.src = "../pics/pics_32x32.png";
        
        article.appendChild(header);
        header.appendChild(icon);
        header.appendChild(closeButton);
        header.appendChild(p);
        article.appendChild(aside);
        article.appendChild(footer);
        main.appendChild(article);
    },
};

window.onload = function(){
    Desktop.init();
};