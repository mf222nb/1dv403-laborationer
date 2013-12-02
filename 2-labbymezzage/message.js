function Message(_message, _date) {
    
    this.getText = function(){
        return _message;
    };
    
    this.setText = function(text){
        _message = text;  
    };
    
    this.getDate = function(){
        return _date;
    };
    
    this.setDate = function(date){
        _date = date;
    };
}

//Functoner att hämta ut olika saker ur vår konstruktor
Message.prototype.toString = function() {
    return this.getText()+ "("+this.getDateText()+")";
};

Message.prototype.getHTMLText = function() {
    return this.getText().replace(/[\n\r]/g, "<br />");
};

Message.prototype.getDateText = function() {
    var messageTime = this.getDate();
    
    return messageTime.getHours() + ":" + messageTime.getMinutes() + ":" + messageTime.getSeconds();    
};