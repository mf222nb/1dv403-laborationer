"use strict";

function CreateWindow(aside, icon, text){
    var main = document.getElementById("main");
    var header = document.createElement("header");
    var article = document.createElement("article");
    var closeButton = document.createElement("a");
    var footer = document.createElement("footer");
    
    footer.setAttribute("class", "footer");
    header.setAttribute("class", "header");
    article.setAttribute("class", "article");
    article.setAttribute("id", "article");
    closeButton.setAttribute("class", "delete");
    closeButton.setAttribute("id", "delete");
    
    article.appendChild(header);
    header.appendChild(icon);
    header.appendChild(text);
    header.appendChild(closeButton);
    article.appendChild(aside);
    //footer.appendChild(loader);
    article.appendChild(footer);
    main.appendChild(article);
    
    this.getArticle = function(){
        return article;
    };
    
    this.getButton = function(){
        return closeButton;    
    };
}