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
        },
        
        send: function(e){
            e.preventDefault();
            var strMessage = document.getElementById("textArea").value;
            var message = new Message(strMessage, new Date());
            //Tömmer chatten så att man själv slipper suddar
            document.getElementById("textArea").value = "";
            this.messages.push(message);
            
            this.renderMessage(message,  (this.messagesCount() - 1));
            
            this.messagesCountUppdater();
        },
        
        messagesCountUppdater: function(){
            var counterBox = document.getElementById("counter");
            counterBox.innerHTML = "Antal Meddelande: " + this.messagesCount();
        },
        
        messagesCount: function(){
            return this.messages.length;  
        },
        
        deleteMessage: function(del, boxId){
            var id = boxId.replace("chatMessage", "");
            this.messages.splice(id,1);
            this.messagesCountUppdater();
            
            var box = document.getElementById("messagebox");
            box.innerHTML = "";
            
            this.renderAllMessages();
        },
        
        renderAllMessages: function(){
          for (var i = 0; i < this.messagesCount(); i++) {
              this.renderMessage(this.messages[i], i);
          }  
        },
        
        renderMessage: function(message, id){
            var that = this;
            var div = document.getElementById("messagebox");
            var box = document.createElement("div");
            var pTag = document.createElement("p");
            var pTime = document.createElement("p");
            var deleteButton = document.createElement("a");
            
            box.id = "chatMessage" + id;
            box.className = "boxMassage";
            
            var time = document.createTextNode(message.getDateText());
            var textMsg = document.createTextNode(message.getHTMLText());
            deleteButton.innerHTML = "Ta bort";
            
            pTag.appendChild(textMsg);
            pTime.appendChild(time);
            box.appendChild(pTag);
            box.appendChild(pTime);
            box.appendChild(deleteButton);
            div.appendChild(box);
            
            deleteButton.addEventListener("click", function(del){
                that.deleteMessage(del, box.id);
            }, false);
        }
};

window.onload = function () {
    MessageBoard.init();
    //MessageBoard.messageBox();
};