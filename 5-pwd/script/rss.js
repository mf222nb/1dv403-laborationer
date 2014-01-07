"use strict";
function RssReader(count){ 
        var aside = document.createElement("aside");
        var article = document.createElement("article");
        var icon = document.createElement("img");
        var text = document.createTextNode("RSS Reader");
        var loader = document.createElement("img");
        
        icon.setAttribute("src", "pics/rss.png");
        article.style.width = "350px";
        article.style.height = "300px";
        
        var time = setTimeout(function() {
                document.getElementById("aside");
                loader.setAttribute("src", "pics/ajax-loader.gif");
                aside.nextSibling.appendChild(loader);
            }, 500);
        
        var myWindow = new CreateWindow(article, aside, icon, text, count);
        
        var xhr = new XMLHttpRequest();
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
        
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"), true);
        xhr.send(null);
        
        this.getWindow = function(){
            return myWindow;    
        };
}