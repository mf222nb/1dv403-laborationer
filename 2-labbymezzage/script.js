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
            document.getElementById("textArea").value = "";
            this.messages.push(message);
            
            this.renderMessage(message);
            
            var counter = this.messages.length;
            var counterBox = document.getElementById("counter");
            counterBox.innerHTML = "Antal Meddelande" + counter;
        },
        
        renderMessage: function(message){
            var div = document.getElementById("messagebox");
            var box = document.createElement("div");
            
            box.id = "chatMessage" + this.messages.length;
            box.className = "boxMassage";
            
            var ptag = document.createElement("p");
            var textMsg = document.createTextNode(message);
            
            ptag.appendChild(textMsg);
            box.appendChild(ptag);
            div.appendChild(box);
        }
};

window.onload = function () {
    MessageBoard.init();
    //MessageBoard.messageBox();
};