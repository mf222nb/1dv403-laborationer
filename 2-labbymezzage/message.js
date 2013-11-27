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
    return this.getText()+ "("+this.getDate()+")";
};

Message.prototype.getHTMLText = function() {
    return this.getText();    
};

Message.prototype.getDateText = function() {
    return this.getDate();    
};