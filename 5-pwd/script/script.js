"use strict";

var Desktop = {
    
    init: function(){
        var that = this;
        var img = document.getElementById("img");
        
        img.addEventListener("click", function(){
            that.imgViewer();
        },false);
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
        var count = 0;

        icon.setAttribute("src", "pics/pics_32x32.png");
        aside.setAttribute("class", "aside");
        
        var myWindow = new CreateWindow(aside, icon, text);
        
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
                        var photo = document.createElement("img");
                        var box = document.createElement("div");
                        
                        //box.style.width = Math.max(img[i].thumbWidth);
                        //box.style.height = Math.max(img[i].thumbHeight);
                        
                        box.setAttribute("class", "box");
                        image.setAttribute("class", "thumb");
                        image.setAttribute("id", "thumb" + count++);
                        
                        image.setAttribute("src", thumbUrl);
                        photo.setAttribute("src", url);
                        
                        box.appendChild(image);
                        aside.appendChild(box);
                        
                        image.addEventListener("click", function(image){
                            var source = image.target.id.replace("thumb", "");
                            var result = img[source].URL;
                            that.photoViewer(result);
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
        
        var close = myWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myWindow.getArticle());
        }, false);
    },
    
    photoViewer: function(image){
        var that = this;
        var aside = document.createElement("aside");
        var icon = document.createElement("img");
        var text = document.createTextNode("Photo Viewer");
        var photo = document.createElement("img");
        
        icon.setAttribute("src", "pics/pics_32x32.png");
        aside.setAttribute("class", "aside");
        photo.setAttribute("src", image);
        
        aside.appendChild(photo);
        
        var myWindow = new CreateWindow(aside, icon, text);
        
        photo.addEventListener("click", function() {
            alert("hej");
        }, false);
        
        var close = myWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myWindow.getArticle());
        }, false);
    },
};

window.onload = function(){
    Desktop.init();
};