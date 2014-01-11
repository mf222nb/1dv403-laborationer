"use strict";

PWD.Classes.MemoryGame = function(){
        var cardArray = [];
        var click = 0;
        var prevCard = null;
        var currentCard = null;
        var tries = 0;
        var that = this;
        
        this.init = function(rows, cols, countY, countX){
            var randomResult = this.getPictureArray(rows, cols);
            
            that.memoryBoard(rows, cols, randomResult, countY, countX);
        };
        
        this.memoryBoard = function(rows, cols, pictureArray, countY, countX){
            var table = document.createElement("table");
            var aside = document.createElement("aside");
            var article = document.createElement("article");
            var icon = document.createElement("img");
            var text = document.createTextNode("Memory Game");
            var index = 0;
            
            icon.setAttribute("src", "pics/game.png");
            article.style.width = "250px";
            article.style.height = "220px";
            aside.style.height = "67%";
            
            table.id = ("table");
            table.className = ("table");
            
            for (var i = 0; i < rows; i++) {
                var tr = document.createElement("tr");
        
                for (var n = 0; n < cols; n++) {
                    var cardConstructor = PWD.Classes.Card;
                    var card = new cardConstructor(pictureArray[index], that);
                    cardArray.push(card);
        
                    tr.appendChild(card.getTd());
                    index++;
                }
                table.appendChild(tr);
            }
            aside.appendChild(table);
            
            var myWindowConstructor = PWD.Classes.CreateWindow;
            var newWindow = new myWindowConstructor(article, aside, icon, text, countY, countX);
            
            var close = newWindow.getButton();
            close.addEventListener("click", function(){
                Desktop.removeWindow(newWindow.getArticle());
            }, false);
        };
        
        this.flipCard = function(card){
            if (prevCard !== null && currentCard !== null) {
                return;
            }
            
            click++;
            
            if (click === 1) {
                card.flip();
                prevCard = card;
                return;
            }
            if (click === 2) {
                card.flip();
                currentCard = card;
                
                if (prevCard.getId() === currentCard.getId()) {
                    click = 0;
                    prevCard = null;
                    currentCard = null;
                }
                else{
                    setTimeout(function() {
                        prevCard.getReset();
                        currentCard.getReset();
                        prevCard = null;
                        currentCard = null;
                    }, 1000);
                }
                click = 0;
                //that.score(tries++);
            }
        };
    /*this.score = function(tries){
        var scoreBox = document.createElement("div");
        var main = document.getElementById("main");
        var p = document.getElementById("pTag").innerHTML = "Antal försök: " + tries;
        
        scoreBox.appendChild(p);
        main.appendChild(scoreBox);
    };*/
    this.getPictureArray = function(rows, cols){
		var numberOfImages = rows*cols;
		var maxImageNumber = numberOfImages/2;
	
	   	var imgPlace = [];
	
	   //Utplacering av bilder i Array
	   for(var i=0; i<numberOfImages; i++)
		  imgPlace[i] = 0;
	
		for(var currentImageNumber=1; currentImageNumber<=maxImageNumber; currentImageNumber++)
		{		
			var imageOneOK = false;
			var imageTwoOK = false;
			
			do
			{
				if(imageOneOK == false)
				{
					var randomOne = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
					
					if( imgPlace[randomOne] == 0 )
					{
						imgPlace[randomOne] = currentImageNumber;
						imageOneOK = true;
					}
				}
				
				if(imageTwoOK == false)
				{
					var randomTwo = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
								
					if( imgPlace[randomTwo] == 0 )
					{
						imgPlace[randomTwo] = currentImageNumber;
						imageTwoOK = true;
					}
				}			
			}
			while(imageOneOK == false || imageTwoOK == false);		
		}
		return imgPlace;
	};
};