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

var Desktop = {
    
    countX: 0,
    countY: 0,
    
    init: function(){
        var that = this;
        var img = document.getElementById("img");
        var rss = document.getElementById("rss");
        var rssAft = document.getElementById("rss1");
        var game = document.getElementById("game");
        
        img.addEventListener("click", function(){
            that.imgViewer();
        },false);
        
        rss.addEventListener("click", function() {
            that.rssViewer();
        }, false);
        
        rssAft.addEventListener("click", function() {
            that.rssAftViewer();
        }, false);
        
        game.addEventListener("click", function() {
            that.gameWindow();
        }, false);
    },
    
    removeWindow: function(article, interval){
        if (typeof interval === "number") {
            clearInterval(interval);    
        }
        
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
        var reset = document.createElement("img");
        
        icon.setAttribute("src", "pics/pics_32x32.png");
        photo.setAttribute("src", image);
        photo.setAttribute("class", "URL");
        article.setAttribute("id", "photoViewer");
        reset.setAttribute("src", "pics/undo.png");
        reset.setAttribute("class", "reset");
        
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
        
        article.firstChild.appendChild(reset);
        
        reset.addEventListener("click", function() {
            document.body.style.backgroundImage = "url(pics/background.jpg)";
        }, false);
        
        var close = myWindow.getButton();
        close.addEventListener("click", function(){
            that.removeWindow(myWindow.getArticle());
        }, false);
    },
    
    rssViewer: function(){
        this.countY++;
        this.countX++;
        var icon = document.createElement("img");
        
        icon.setAttribute("src", "pics/rss.png");
        icon.setAttribute("class", "rss");
            
        var MyRSSWindowConstructor = PWD.Classes.RssReader;
        var rssWindow = new MyRSSWindowConstructor();
        
        rssWindow.init(this.countY, this.countX, icon, "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"));
    },
    
    rssAftViewer: function(){
        this.countY++;
        this.countX++;
        var icon = document.createElement("img");
        
        icon.setAttribute("src", "pics/rss1.png");
        icon.setAttribute("class", "rss");
        
        var MyRSSAftWindowConstructor = PWD.Classes.RssReader;
        var rssAftWindow = new MyRSSAftWindowConstructor();
        
        rssAftWindow.init(this.countY, this.countX, icon, "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.aftonbladet.se/rss.xml"));
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