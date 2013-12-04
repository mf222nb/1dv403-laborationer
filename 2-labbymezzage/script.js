var MessageBoard = function(divId){
        //Skapar boxar, textnoder, rubriker, knappar och textfält
        var div = document.createElement("div");
        var h1 = document.createElement("h1").appendChild(document.createTextNode("Labby Message"));
        var divMessageBox = document.createElement("div");
        var divMessageCount = document.createElement("div");
        var textArea = document.createElement("textarea");
        var sendButton = document.createElement("button");
        textArea.setAttribute("class", "text");
        sendButton.setAttribute("class", "button");
        sendButton.innerHTML = "Skicka";
        
        var that = this;
        var messages = [];
        
        this.init = function(){
            //Sätter ett classnamn så att du kan stila den med css
            div.className = "large-6 columns";
            div.appendChild(h1);
            div.appendChild(divMessageBox);
            div.appendChild(divMessageCount);
            div.appendChild(textArea);
            div.appendChild(sendButton);
            document.querySelector("main").appendChild(div);
                
            //That = this ger mig en referens till mitt MessageBoard object. Den anonyma funktionen är en referens till den fuktionen
            //som ska köras när eventet triggas
            sendButton.addEventListener("click", function(e){
                that.send(e);
            }, false);
            //Gör så att om man trycker på enter knappen så skickas man direkt till send funktionen
            textArea.addEventListener("keypress", function(e){
                var key = e.keyCode;
                if(key === 13 && !e.shiftKey){
                    that.send(e);
                }
            }, false);
            
        };
        
        this.send = function(e){
            e.preventDefault();
            //Hämtar ut vad som skrivs i chatrutan
            var message = new Message(textArea.value, new Date());
            //Tömmer chatten så att man själv slipper suddar
            textArea.value = "";
            //Lägger till meddelandet sist i arrayen
            messages.push(message);
            
            //Skickr meddelandet och id:t i arrayen och man måste ta -1 för att arrayer är 0 indexerade
            that.renderMessage(message,  (that.messagesCount() - 1));
            
            that.messagesCountUppdater();
        };
        
        this.messagesCountUppdater = function(){
            //Uppdaterar längden på arrayen med den nya längden av arrayen och skriver ut det i en box
            //var counterBox = document.getElementById("counter");
            divMessageCount.innerHTML = "Antal meddelanden: " + that.messagesCount();
        };
        
        this.messagesCount = function(){
            //Tar ut längden på arrayen
            return messages.length;  
        };
        
        this.deleteMessage = function(del, boxId){
            //byter ut id:t på boxen mot en tomsträng så att man enbart får en siffra
            
            //Confirm är en inbyggd function som ger en ruta med ok eller cancel och den returnerar true eller false beroende på vad användaren
            //väljer.
            if (!confirm("Är du säker på att du vill ta bort meddelandet?")) {
                return;
            }
            
            var id = boxId.replace("chatMessage", "");
            //Tar bort 1 element ur arrayen
            messages.splice(id, 1);
            //Uppdaterar längden på arrayen
            that.messagesCountUppdater();
            
            var box = divMessageBox;
            //Tömmer boxen som innehåller alla meddelanden mot en tomsträng
            box.innerHTML = "";
            
            that.renderAllMessages();
        };
        
        
        this.timeStamp = function(time, boxId){
            //Få ut det unika id:t på en box och sedan hämta ut hela tidsstämpeln från just det meddelandet i arrayen
            var id = boxId.replace("chatMessage", "");
            
            alert(messages[id].getDate());
        };
        
        this.renderAllMessages = function(){
            //Loopar igenom arrayen och anropar renderMessage function som bygger upp hela chatobjektet
            //Andra argumentet "i" är en siffra som är arraynumret 
            for (var i = 0; i < that.messagesCount(); i++) {
                that.renderMessage(messages[i], i);
          }  
        };
        
        this.renderMessage = function(message, id){
            //I denna function hämtar jag ut id:n och skapar nya taggar och skapar nya text noder och lägger in alla olika taggar i varandra
            //var messageBox = document.getElementById("messagebox");
            var box = document.createElement("div");
            var pTagText = document.createElement("p");
            var pTime = document.createElement("p");
            var deleteButton = document.createElement("a");
            var timeButton = document.createElement("a");
            
            box.id = "chatMessage" + id;
            box.className = "boxMassage";
            
            var time = document.createTextNode(message.getDateText());
        
            deleteButton.innerHTML = "Ta bort";
            timeButton.innerHTML = "Full tid";
            
            divMessageBox.appendChild(box);
            pTagText.innerHTML = message.getHTMLText();
            pTime.appendChild(time);
            box.appendChild(pTime);
            box.appendChild(pTagText);
            box.appendChild(deleteButton);
            box.appendChild(timeButton);
            
            //Kallar på funktionen deleteMessage när man trycker på ta bort knappen
            deleteButton.addEventListener("click", function(del){
                that.deleteMessage(del, box.id);
            }, false);
            
            timeButton.addEventListener("click", function(time){
                that.timeStamp(time, box.id);
            }, false);
        };
};

window.onload = function () {
    var messBoard1 = new MessageBoard("hej");
    messBoard1.init();
    
    var messBoard2 = new MessageBoard("hallå");
    messBoard2.init();
};