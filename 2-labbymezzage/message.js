function Message(message, date) {
    
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text){
        message = _text;  
    };
    
    this.getDate = function(){
        return date;
    };
    
    this.setDate = function(_date){
        date = _date;
    };
}

//Functoner att hämta ut olika saker ur vår konstruktor
Message.prototype.toString = function() {
    return this.getText()+ "("+this.getDate()+")";
};

Message.prototype.getHTMLText = function() {
    return this.getText();    
};

Message.prototype.getDateText = function() {
    return this.getDate();    
};