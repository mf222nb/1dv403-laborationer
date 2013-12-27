"use strict";

var Validator = {
    
    init: function(){
        var form = document.getElementById("form_name");
        form.onsubmit = function(e){
            e.preventDefault();
        };
        
        this.validation();
        this.submit();
    },
    exist: null,
    errorMsg: null,
    fieldValues: {},
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
    
    check: function(){
        var knappen = document.getElementById("button");
        knappen.setAttribute("disabled", "disabled");
        var popup = document.createElement("div");
        var background = document.createElement("div");
        var button = document.createElement("button");
        var button1 = document.createElement("button");
        var body = document.getElementById("body");
        var cancel = document.createTextNode("Cancel");
        var kop = document.createTextNode("Genomför köp");
        
        
        popup.setAttribute("id", "myModal");
        popup.setAttribute("class", "reveal-modal");
        
        var popupclass = popup.className;
        popup.setAttribute("class", popupclass+" displayshow");
        background.setAttribute("class", "background");
        button1.setAttribute("type", "submit");
        
        button.appendChild(cancel);
        button1.appendChild(kop);
        body.insertBefore(background, body.firstChild);
        body.appendChild(popup);
        
        var table = document.createElement("table");
        var tagName = document.getElementsByTagName("input");
        
        
        for (var i = 0; i < tagName.length; i++) {
            var input = tagName[i].getAttribute("name");
            var inputValue = tagName[i].value;
            
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var tdI = document.createElement("td");
            var text = document.createTextNode(input);
            var textValue = document.createTextNode(inputValue);
        
            td.appendChild(text);
            tdI.appendChild(textValue);
            tr.appendChild(td);
            tr.appendChild(tdI);
            table.appendChild(tr);
        }
        var select = document.getElementById("select");
        var selectName = select.getAttribute("name");
        var optionText = document.createTextNode(select.options[select.selectedIndex].value);
        var textName = document.createTextNode(selectName);
        var tdO = document.createElement("td");
        var tdName = document.createElement("td");
        var trSecond = document.createElement("tr");
        
        tdName.appendChild(textName);
        tdO.appendChild(optionText);
        trSecond.appendChild(tdName);
        trSecond.appendChild(tdO);
        table.appendChild(trSecond);
        popup.appendChild(table);
        
        popup.appendChild(button);
        popup.appendChild(button1);
        
        button.addEventListener("click", function(){
            var popupclass = popup.className;
            popupclass = popupclass.split(' ');
            popup.setAttribute("class", popupclass[0]+"displaynone");
            popup.parentNode.removeChild(popup);
            background.parentNode.removeChild(background);
        }, false);
        
        button1.addEventListener("click", function() {
            document.getElementById("form_name").submit();
        }, false);
    },
    
    submit: function(){
        var that = this;
        var button = document.getElementById("button");
        button.addEventListener("click", function(){
            that.errorMsg = document.querySelectorAll(".error");
            if (that.errorMsg.length === 0) {
                that.check();
            }
        }, false);
    },
};

window.onload = function(){
    Validator.init();
};