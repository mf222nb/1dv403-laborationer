"use strict";

var PWD = PWD || {};

PWD.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
    parent = PWD,
    i;
     // strip redundant leading global
    if (parts[0] === "PWD") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
    // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }
    return parent;
};

PWD.namespace('Classes');
PWD.namespace('Classes.MemoryGame');

var Desktop = {
    
    countX: 0,
    countY: 0,
    
    init: function(){
        var that = this;
        var img = document.getElementById("img");
        var rss = document.getElementById("rss");
        var game = document.getElementById("game");
        
        img.addEventListener("click", function(){
            that.imgViewer();
        },false);
        
        rss.addEventListener("click", function() {
            that.rssViewer();
        }, false);
        
        game.addEventListener("click", function() {
            that.gameWindow();
        }, false);
    },
    
    removeWindow: function(article){
        article.parentNode.removeChild(article);
        this.countY--;
        this.countX--;
    },
    
    imgViewer: function(){
        this.countY++;
        this.countX++;
        var that = this;
        
        var myGalleryWindowConstructor = PWD.Classes.GalleryWindow;
        var myGalleryWindow = new myGalleryWindowConstructor(this.countY, this.countX).getGalleryWindow();
        
        var close = myGalleryWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myGalleryWindow.getArticle());
        }, false);
    },
    
    photoViewer: function(image, width, height){
        this.countY++;
        this.countX++;
        var that = this;
        var aside = document.createElement("aside");
        var article = document.createElement("article");
        var icon = document.createElement("img");
        var text = document.createTextNode("Photo Viewer");
        var photo = document.createElement("img");
        //var photo = aside.style.backgroundImage = "url(" + image + ")";
        
        icon.setAttribute("src", "pics/pics_32x32.png");
        photo.setAttribute("src", image);
        photo.setAttribute("class", "URL");
        article.setAttribute("id", "photoViewer");
        
        aside.appendChild(photo);
        aside.style.overflow = "hidden";
        
        var myWindowConstructor = PWD.Classes.CreateWindow;
        var myWindow = new myWindowConstructor(article, aside, icon, text, this.countY, this.countX);
        
        article.style.width = width +"px";
        article.style.height = height + "px";
        
        article.style.top = "10px";
        article.style.left = "500px";
        
        photo.addEventListener("click", function() {
            document.body.style.backgroundImage = "url(" + image + ")";
        }, false);
        
        var close = myWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myWindow.getArticle());
        }, false);
    },
    
    rssViewer: function(){
        this.countY++;
        this.countX++;
        var that = this;
        
        var myRSSWindowConstructor = PWD.Classes.RssReader;
        var myRSSWindow = new myRSSWindowConstructor(this.countY, this.countX).getWindow();
        var close = myRSSWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myRSSWindow.getArticle());
        }, false);
    },
    
    gameWindow: function(){
        this.countY++;
        this.countX++;
        
        var MemoryGame = PWD.Classes.MemoryGame;
        
        var memory = new MemoryGame();
        memory.init(4, 4, this.countY, this.countX);
    },
};

window.onload = function(){
    Desktop.init();
};