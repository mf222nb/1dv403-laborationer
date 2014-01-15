"use strict";

//Skapar ett fönster, håller reda på vad nya fönster ska ligga och returnerar fönster så man kan komma åt dem från andra skript.
PWD.Classes.CreateWindow = function(article, aside, icon, text, countY, countX){
    var main = document.getElementById("main");
    var header = document.createElement("header");
    var closeButton = document.createElement("a");
    var footer = document.createElement("footer");
    
    footer.setAttribute("class", "footer");
    header.setAttribute("class", "header");
    article.setAttribute("class", "article");
    aside.setAttribute("class", "aside");
    closeButton.setAttribute("class", "delete");
    closeButton.setAttribute("id", "delete");
    article.style.top = countY * 10 + "px";
    article.style.left = countX * 10 + "px";
    if (article.style.top === "490px") {
        Desktop.countY = 0;
    }
    if (article.style.left === "1320px") {
        Desktop.countX = 0;
        Desktop.countY = 0;
    }
    
    article.addEventListener("click", function(){
        var articles = document.querySelectorAll(".article");
        for (var i = 0; i < articles.length; i++) {
            articles[i].style.zIndex = 1;
        }
        article.style.zIndex = 100;
    }, false);
    
    article.appendChild(header);
    header.appendChild(icon);
    header.appendChild(text);
    header.appendChild(closeButton);
    article.appendChild(aside);
    article.appendChild(footer);
    main.appendChild(article);
    
    this.getArticle = function(){
        return article;
    };
    
    this.getButton = function(){
        return closeButton;    
    };
};