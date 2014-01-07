"use strict";

var Desktop = {
    
    init: function(){
        var that = this;
        var img = document.getElementById("img");
        var rss = document.getElementById("rss");
        
        img.addEventListener("click", function(){
            that.imgViewer();
        },false);
        
        rss.addEventListener("click", function() {
            that.rssViewer();
        }, false);
    },
    
    removeWindow: function(article){
        article.parentNode.removeChild(article);
    },
    
    imgViewer: function(){
        var that = this;
        var aside = document.createElement("aside");
        var article = document.createElement("article");
        var icon = document.createElement("img");
        var text = document.createTextNode("Image Viewer");
        var loader = document.createElement("img");
        var jasonStr, img, thumbUrl;
        var count = 0;
        
        icon.setAttribute("src", "pics/pics_32x32.png");
        aside.setAttribute("class", "aside");
        article.style.width = "350px";
        article.style.height = "300px";
        
        var myWindow = new CreateWindow(article, aside, icon, text);
        
        var time = setTimeout(function() {
                document.getElementById("aside");
                loader.setAttribute("src", "pics/ajax-loader.gif");
                aside.nextSibling.appendChild(loader);
            }, 500);
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    jasonStr = xhr.responseText;
                    img = JSON.parse(jasonStr);
                    var width = 0;
                    var height = 0;
                    for (var i = 0; i < img.length; i++) {
                        thumbUrl = img[i].thumbURL;
                        
                        var image = document.createElement("img");
                        var box = document.createElement("div");
                        
                        if (width < img[i].thumbWidth) {
                            width = img[i].thumbWidth;
                        }
                        if (height < img[i].thumbHeight) {
                            height = img[i].thumbHeight;
                        }
                        
                        box.style.width = width + 15 + "px";
                        box.style.height = height + 15 + "px";
                        box.setAttribute("class", "box");
                        image.setAttribute("class", "thumb");
                        image.setAttribute("id", "thumb" + count++);
                        
                        image.setAttribute("src", thumbUrl);
                        
                        box.appendChild(image);
                        aside.appendChild(box);
                        
                        image.addEventListener("click", function(image){
                            var source = image.target.id.replace("thumb", "");
                            var result = img[source].URL;
                            var urlWidth = img[source].width;
                            var urlHeight = img[source].height;
                            that.photoViewer(result, urlWidth, urlHeight);
                        }, false);
                    }
                    loader.setAttribute("src", "");
                    clearTimeout(time);
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
    
    photoViewer: function(image, width, height){
        var that = this;
        var aside = document.createElement("aside");
        var article = document.createElement("article");
        var icon = document.createElement("img");
        var text = document.createTextNode("Photo Viewer");
        var photo = document.createElement("img");
        
        icon.setAttribute("src", "pics/pics_32x32.png");
        aside.setAttribute("class", "aside");
        photo.setAttribute("src", image);
        photo.setAttribute("class", "URL");
        
        aside.appendChild(photo);
        
        var myWindow = new CreateWindow(article, aside, icon, text);
        
        article.setAttribute("id", "photoViewer");
        article.style.width = width +"px";
        article.style.height = height + "px";
        
        photo.addEventListener("click", function() {
            document.body.style.backgroundImage = "url(" + image + ")";
        }, false);
        
        var close = myWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myWindow.getArticle());
        }, false);
    },
    
    rssViewer: function(){
        var that = this;
        
        var myRSSWindow = new RssReader().getWindow();
        var close = myRSSWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myRSSWindow.getArticle());
        }, false);
    },
};

window.onload = function(){
    Desktop.init();
};