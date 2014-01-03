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
        var that = this;
        var aside = document.createElement("aside");
        var icon = document.createElement("img");
        var text = document.createTextNode("Image Viewer");
        var jasonStr, img, thumbUrl, url;

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
                        url = img[i].URL;
                        
                        var image = document.createElement("img");
                        var box = document.createElement("div");
                        var photo = document.createElement("img");
                        
                        //box.style.width = Math.max(img[i].thumbWidth);
                        //box.style.height = Math.max(img[i].thumbHeight);
                        
                        box.setAttribute("class", "box");
                        image.setAttribute("class", "thumb");
                        image.setAttribute("id", "thumb");
                        
                        image.setAttribute("src", thumbUrl);
                        photo.setAttribute("src", url);
                        
                        box.appendChild(image);
                        aside.appendChild(box);
                        
                        image.addEventListener("click", function(url) {
                                that.photoViewer(url);
                        }, false);
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
    
    photoViewer: function(image){
        //alert(image);
        console.log(image);   
    },
};

window.onload = function(){
    Desktop.init();
};