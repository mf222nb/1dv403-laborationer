var MessageBoard = {
        
        messages: [],
        
        /*messageBox: function(messageBox){
            var div = document.createElement("div");
            div.id = "messagebox";
            document.getElementById("form").insertBefore(div, document.getElementById("textArea"));
        },*/
        
        init: function(){
            var that = this;
            
            var sendButton = document.getElementById("send");
            //That = this ger mig en referens till mitt MessageBoard object. Den anonyma funktionen är en referens till den fuktionen
            //som ska köras när eventet triggas
            sendButton.addEventListener("click", function(e){
                that.send(e);
            }, false);
            //Gör så att om man trycker på enter knappen så skickas man direkt till send funktionen
            document.addEventListener("keypress", function(e){
                var key = e.keyCode;
                if(key === 13 && !e.shiftKey){
                    that.send(e);
                }
            }, false);
            
        },
        
        send: function(e){
            e.preventDefault();
            //Hämtar ut vad som skrivs i chatrutan
            var strMessage = document.getElementById("textArea").value;
            var message = new Message(strMessage, new Date());
            //Tömmer chatten så att man själv slipper suddar
            document.getElementById("textArea").value = "";
            //Lägger till meddelandet sist i arrayen
            this.messages.push(message);
            
            //Skickr meddelandet och id:t i arrayen och man måste ta -1 för att arrayer är 0 indexerade
            this.renderMessage(message,  (this.messagesCount() - 1));
            
            this.messagesCountUppdater();
        },
        
        messagesCountUppdater: function(){
            //Uppdaterar längden på arrayen med den nya längden av arrayen och skriver ut det i en box
            var counterBox = document.getElementById("counter");
            counterBox.innerHTML = "Antal meddelanden: " + this.messagesCount();
        },
        
        messagesCount: function(){
            //Tar ut längden på arrayen
            return this.messages.length;  
        },
        
        deleteMessage: function(del, boxId){
            //byter ut id:t på boxen mot en tomsträng så att man enbart får en siffra
            var id = boxId.replace("chatMessage", "");
            //Tar bort 1 element ur arrayen
            this.messages.splice(id, 1);
            //Uppdaterar längden på arrayen
            this.messagesCountUppdater();
            
            var box = document.getElementById("messagebox");
            //Tömmer boxen som innehåller alla meddelanden mot en tomsträng
            box.innerHTML = "";
            
            this.renderAllMessages();
        },
        
        timeStamp: function(time, boxId){
            //Få ut det unika id:t på en box och sedan hämta ut hela tidsstämpeln från just det meddelandet i arrayen
            var id = boxId.replace("chatMessage", "");
            
            alert(this.messages[id].getDate());
        },
        
        renderAllMessages: function(){
            //Loopar igenom arrayen och anropar renderMessage function som bygger upp hela chatobjektet
            //Andra argumentet "i" är en siffra som är arraynumret 
            for (var i = 0; i < this.messagesCount(); i++) {
                this.renderMessage(this.messages[i], i);
          }  
        },
        
        renderMessage: function(message, id){
            //I denna function hämtar jag ut id:n och skapar nya taggar och skapar nya text noder och lägger in alla olika taggar i varandra
            var that = this;
            var messageBox = document.getElementById("messagebox");
            var box = document.createElement("div");
            var pTagText = document.createElement("p");
            var pTime = document.createElement("p");
            var deleteButton = document.createElement("a");
            var timeButton = document.createElement("a");
            
            box.id = "chatMessage" + id;
            box.className = "boxMassage";
            
            var time = document.createTextNode(message.getDateText());
            var textMsg = document.createTextNode(message.getHTMLText());
            deleteButton.innerHTML = "Ta bort";
            timeButton.innerHTML = "Full tid";
            
            pTagText.appendChild(textMsg);
            pTime.appendChild(time);
            box.appendChild(pTagText);
            box.appendChild(pTime);
            box.appendChild(deleteButton);
            box.appendChild(timeButton);
            messageBox.appendChild(box);
            
            //Kallar på funktionen deleteMessage när man trycker på ta bort knappen
            deleteButton.addEventListener("click", function(del){
                that.deleteMessage(del, box.id);
            }, false);
            
            timeButton.addEventListener("click", function(time){
                that.timeStamp(time, box.id);
            }, false);
        }
};

window.onload = function () {
    MessageBoard.init();
};