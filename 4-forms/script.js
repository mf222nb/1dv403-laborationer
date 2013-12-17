"use strict";

var Validator = {
    
    exist: null,

    validation: function(){
        
        var fName = document.getElementById("fName");
        fName.onblur = function(){
            var small, text;
            
            if (fName.value === "" || fName.value === null) {
                var fDiv = document.getElementById("fDiv");
                
                if(!this.exist){
                    small = document.createElement("small");
                    text = document.createTextNode("Detta fält får inte lämnas tomt");

                    small.setAttribute("id", "firstName");
                    small.setAttribute("class", "error");
                    
                    small.appendChild(text);
                    fDiv.appendChild(small);
                    
                    this.exist = true;
                }
            }
            else{
                var divTag = document.getElementById("firstName");
                divTag.parentNode.removeChild(divTag);
                this.exist = null;
            }
        };
        
        var sName = document.getElementById("sName");
        sName.onblur = function(){
            if (sName.value === "" || sName.value === null) {
                var sDiv = document.getElementById("sDiv");
                
                if(!this.exist){
                    var text = document.createTextNode("Detta fält får inte lämnas tomt");
                    var small = document.createElement("small");
                    
                    small.setAttribute("id", "lastName");
                    small.setAttribute("class", "error");
                    
                    small.appendChild(text);
                    sDiv.appendChild(small);
                    
                    this.exist = true;
                }
            }
            else{
                var divTag = document.getElementById("lastName");
                divTag.parentNode.removeChild(divTag);
                this.exist = null;
            }
        };
        
        var email = document.getElementById("email");
        email.onblur = function(){
            //Tagit regexen från zurb foundation
            if (!email.value.match(/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) || email.value === "") {
                var eDiv = document.getElementById("eDiv");
                
                if(!this.exist){
                    var text = document.createTextNode("Du måste ange en giltig email addres");
                    var small = document.createElement("small");
                    
                    small.setAttribute("id", "mail");
                    small.setAttribute("class", "error");
                    
                    small.appendChild(text);
                    eDiv.appendChild(small);
                    
                    this.exist = true;
                }
            }
            else{
                var divTag = document.getElementById("mail");
                divTag.parentNode.removeChild(divTag);
                this.exist = null;
            }
        };
        
        var postCode = document.getElementById("postCode");
        postCode.onblur = function(){
            var post = postCode.value;
            if (post.match(/^\d{5}$/) || post.match(/^\d{3}[- ]\d{2}$/) || post.match(/^[SE]+\d{5}$/) || post.match(/^[SE]+\d{3}[- ]\d{2}$/) || post.match(/^[SE ]+(\d{3}[- ]\d{2}|\d{5})$/)) {
                post = post.replace(/-/g, "");
                post = post.replace(/ /g, "");
                postCode.value = post.replace(/SE/g, "");
                
                var divTag = document.getElementById("post");
                divTag.parentNode.removeChild(divTag);
                this.exist = null;
            }
            else{
                var pDiv = document.getElementById("pDiv");
                
                if(!this.exist){
                    var text = document.createTextNode("Detta fält får inte lämnas tomt");
                    var small = document.createElement("small");
                    
                    small.setAttribute("id", "post");
                    small.setAttribute("class", "error");
                    
                    small.appendChild(text);
                    pDiv.appendChild(small);
                    
                    this.exist = true;
                }
            }
        };
    },
    
    submit: function(){
        var form = document.getElementById("form_name");
        form.onsubmit = function(){
            return Validator.validation();
        };
    },
};

window.onload = function(){
    Validator.validation();
};