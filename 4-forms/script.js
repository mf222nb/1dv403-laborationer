"use strict";

var Validator = {

    onblur: function(){
        console.log("hej");
    },
    
    fName: function(){
        var check = document.getElementsByClassName("empty");
        for (var i = 0; i < check.length; i++) {
            check[i].onblur = Validator.onblur();    
            }
        }
};

window.onload = function(){
    Validator.fName();
};