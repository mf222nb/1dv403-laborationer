window.onload = function () {
    
    var mess = new Message("Testmeddelande", new Date());
    alert(mess);
    alert(mess.getText());
    mess.setText("En väldigt fin dag");
    alert(mess);
};
    