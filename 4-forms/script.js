"use strict";

var Validator = {

    validation: function(){
        
        var fName = document.getElementById("fName");
        fName.onblur = function(){
            if (fName.value === "" || fName.value === null) {
                var fDiv = document.getElementById("fDiv");
                var text = document.createTextNode("Detta fält får inte lämnas tomt");
                var div = document.createElement("div");
                
                div.appendChild(text);
                fDiv.appendChild(div);
            }
        };
        
        var sName = document.getElementById("sName");
        sName.onblur = function(){
            if (sName.value === "" || sName.value === null) {
                var sDiv = document.getElementById("sDiv");
                var text = document.createTextNode("Detta fält får inte lämnas tomt");
                var div = document.createElement("div");
                
                div.appendChild(text);
                sDiv.appendChild(div);
            }
        };
        
        var email = document.getElementById("email");
        email.onblur = function(){
            //Tagit regexen från zurb foundation
            if (!email.value.match(/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) || email.value === "") {
                var eDiv = document.getElementById("eDiv");
                var text = document.createTextNode("Du måste ange en giltig email addres");
                var div = document.createElement("div");
                
                div.appendChild(text);
                eDiv.appendChild(div);
            }    
        };
        
        var postCode = document.getElementById("postCode");
        postCode.onblur = function(){
            if (postCode.value === "") {
                var pDiv = document.getElementById("pDiv");
                var text = document.createTextNode("Detta fält får inte lämnas tomt");
                var div = document.createElement("div");
                
                div.appendChild(text);
                pDiv.appendChild(div);
            }    
        };
    },
    
};

window.onload = function(){
    Validator.validation();
};