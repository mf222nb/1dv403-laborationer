"use strict";

var Desktop = {
    init: function(){
        var that = this;
        var img = document.getElementById("img");
        
        img.addEventListener("click", function(){
            that.imgViewer();
        },false);
    },
    
    createWindow: function(aside, icon, text){
        var that = this;
        var main = document.getElementById("main");
        var header = document.createElement("header");
        var article = document.createElement("article");
        var closeButton = document.createElement("a");
        var footer = document.createElement("footer");
        
        footer.setAttribute("class", "footer");
        header.setAttribute("class", "header");
        aside.setAttribute("class", "aside");
        article.setAttribute("class", "article");
        closeButton.setAttribute("class", "delete");
        closeButton.setAttribute("id", "delete");
        
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
    
    imgViewer: function(){
        var aside = document.createElement("aside");
        var icon = document.createElement("img");
        var text = document.createTextNode("Image Viewer");
        var jasonStr;
        var img;
        var thumbUrl;
        
        icon.setAttribute("src", "pics/pics_32x32.png");
        aside.setAttribute("class", "aside");
        
        this.createWindow(aside, icon, text);
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    jasonStr = xhr.responseText;
                    img = JSON.parse(jasonStr);
                    
                    for (var i = 0; i < img.length; i++) {
                        thumbUrl = img[i].thumbURL;
                        
                        var image = document.createElement("img");
                        var box = document.createElement("div");
                        
                        box.setAttribute("class", "box");
                        image.setAttribute("class", "thumb");
                        
                        image.src = thumbUrl;
                        
                        box.appendChild(image);
                        aside.appendChild(box);
                    }
                }
                else{
                    console.log("Läsfel, status:" +xhr.status);
                }
            }    
        };
        
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    },
};

window.onload = function(){
    Desktop.init();
};