"use strict";
PWD.Classes.RssReader = function(){
    this.init = function(countY, countX, icon, url){
    var that = this;
    var aside = document.createElement("aside");
    var article = document.createElement("article");
    var text = document.createTextNode("RSS Reader");
    var loader = document.createElement("img");
    
    article.style.width = "350px";
    article.style.height = "300px";
    
    var myWindowConstructor = PWD.Classes.CreateWindow;
    var myWindow = new myWindowConstructor(article, aside, icon, text, countY, countX);
    
    that.xhrCall(aside, loader, url);
    
    var interval = setInterval(function(){
        that.xhrCall(aside, loader);
    }, 300000);
    
    var close = myWindow.getButton();
    close.addEventListener("click", function(){
        Desktop.removeWindow(myWindow.getArticle(), interval);
    }, false);
};
    
    this.xhrCall = function(aside, loader, url){
        var time = setTimeout(function() {
            document.getElementById("aside");
            loader.setAttribute("src", "pics/ajax-loader.gif");
            aside.nextSibling.appendChild(loader);
        }, 500);
        
        var xhr = new XMLHttpRequest();
        
        var date = new Date();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    var rss = xhr.responseText;
                    aside.innerHTML = rss;
                }
            }
            loader.setAttribute("src", "");
            clearTimeout(time);
        };
        xhr.open("get", url, true);
        xhr.send(null); 
        
        aside.nextSibling.innerHTML = "Senast uppdaterad: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
};