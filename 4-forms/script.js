"use strict";

var Validator = {

    validation: function(){
        
        var fName = document.getElementById("fName");
        fName.onblur = function(){
            if (fName.value === "" || fName.value === null) {
                alert("hej");
            }
        };
        
        var sName = document.getElementById("sName");
        sName.onblur = function(){
            if (sName.value === "" || sName.value === null) {
                alert("då");
            }
        };
        
        var email = document.getElementById("email");
        email.onblur = function(){
            //Tagit regexen från zurb foundation
            if (!email.value.match(/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) || email.value === "") {
                alert("najs");
            }    
        };
        
        var postCode = document.getElementById("postCode");
        postCode.onblur = function(){
            if (postCode.value === "") {
                alert("tja");
            }    
        };
    },
    
};

window.onload = function(){
    Validator.validation();
};