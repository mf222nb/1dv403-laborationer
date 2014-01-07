"use strict";
function RssReader(){ 
        var aside = document.createElement("aside");
        var article = document.createElement("article");
        var icon = document.createElement("img");
        var text = document.createTextNode("RSS Reader");
        
        icon.setAttribute("src", "pics/rss.png");
        article.style.width = "350px";
        article.style.height = "300px";
        
        var myWindow = new CreateWindow(article, aside, icon, text);
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    alert(xhr.responseText);
                }
            }    
        };
        
        xhr.open("get", "", true);
        xhr.send(null);
        
        this.getWindow = function(){
            return myWindow;    
        };
}