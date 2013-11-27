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
            var message = new Message(strMessage, Date());
            this.messages.push(message);
            console.log(message.getText());
            console.log(this.messages.toString());
            this.renderMessage(message);
        },
        
        renderMessage: function(message){
            var div = document.getElementById("messagebox");
            var box = document.createElement("div");
            var text = document.createTextNode(message);
            box.appendChild(text);
            div.appendChild(box);
        }
};

window.onload = function () {
    MessageBoard.init();
    //MessageBoard.messageBox();
};