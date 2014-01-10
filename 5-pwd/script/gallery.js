"use strict";

PWD.Classes.GalleryWindow = function(countY, countX){
    var aside = document.createElement("aside");
    var article = document.createElement("div");
    var icon = document.createElement("img");
    var text = document.createTextNode("Image Viewer");
    var loader = document.createElement("img");
    var jasonStr, img, thumbUrl;
    var count = 0;
    
    icon.setAttribute("src", "pics/pics_32x32.png");
    article.style.width = "350px";
    article.style.height = "300px";
    aside.style.height = "81%";
    
    var myWindowConstructor = PWD.Classes.CreateWindow;
    var myWindow = new myWindowConstructor(article, aside, icon, text, countY, countX);
    
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
                        Desktop.photoViewer(result, urlWidth, urlHeight);
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
    
    this.getGalleryWindow = function(){
        return myWindow;    
    };
}