"use strict";

function CreateWindow(article, aside, icon, text, count){
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
    
    article.style.top = count * 10 + "px";
    article.style.left = count * 10 + "px";
    
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
}