"use strict";

var Desktop = {
    
    count: 0,
    
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
        //this.count--;
    },
    
    imgViewer: function(){
        this.count++;
        var that = this;
        
        var myGalleryWindow = new GalleryWindow(this.count).getGalleryWindow();
        
        var close = myGalleryWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myGalleryWindow.getArticle());
        }, false);
    },
    
    photoViewer: function(image, width, height){
        this.count++;
        var that = this;
        var aside = document.createElement("aside");
        var article = document.createElement("article");
        var icon = document.createElement("img");
        var text = document.createTextNode("Photo Viewer");
        var photo = document.createElement("img");
        
        icon.setAttribute("src", "pics/pics_32x32.png");
        photo.setAttribute("src", image);
        photo.setAttribute("class", "URL");
        article.setAttribute("id", "photoViewer");
        
        aside.appendChild(photo);
        
        var myWindow = new CreateWindow(article, aside, icon, text, this.count);
        
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
        this.count++;
        var that = this;
        
        var myRSSWindow = new RssReader(this.count).getWindow();
        var close = myRSSWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myRSSWindow.getArticle());
        }, false);
    },
};

window.onload = function(){
    Desktop.init();
};