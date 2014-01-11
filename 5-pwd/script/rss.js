"use strict";
PWD.Classes.RssReader = function(countY, countX){ 
        var aside = document.createElement("aside");
        var article = document.createElement("article");
        var icon = document.createElement("img");
        var text = document.createTextNode("RSS Reader");
        var loader = document.createElement("img");
        
        icon.setAttribute("src", "pics/rss.png");
        article.style.width = "350px";
        article.style.height = "300px";
        
        var myWindowConstructor = PWD.Classes.CreateWindow;
        var myWindow = new myWindowConstructor(article, aside, icon, text, countY, countX);
        
        var xhr = new XMLHttpRequest();
        var interval = setInterval(function(){
            var time = setTimeout(function() {
                document.getElementById("aside");
                loader.setAttribute("src", "pics/ajax-loader.gif");
                aside.nextSibling.appendChild(loader);
            }, 500);
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
            xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"), true);
            xhr.send(null);
            
            aside.nextSibling.innerHTML = "Senast uppdaterad: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }, 300000);
        
        var close = myWindow.getButton();
        close.addEventListener("click", function(){
            Desktop.removeWindow(myWindow.getArticle(), interval);
        }, false);
        
        this.getWindow = function(){
            return myWindow;    
        };
};