"use strict";

var Validator = {
    
    /*fName: function(){
        var check = document.getElementsByClassName("empty");
        for (var i = 0; i < check.length; i++) {
            check[i].onblur = Validator.onblur();    
            }
        }*/
        
    validation: function(){
        var name = document.forms["form_name"]["name"].value;
        var surname = document.forms["form_name"]["surname"].value;
        var email = document.forms["form_name"]["email"].value;
        
        if (name === "" || name === null) {
            alert("Fyll i ett namn");
            return false;
        }
        
        if (surname === "" || surname === null) {
            alert("Fyll i ett efternamn");
            return false;
        }
    }
        
};

/*window.onload = function(){
    Validator.fName();
};*/