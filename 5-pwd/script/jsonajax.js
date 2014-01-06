"use strict";

var JsonAjax = function(url){
   
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                var json = xhr.responseText;
                //console.log(json);
                return json;
            }
        }
    };
    xhr.open("get", url, true);
    xhr.send(null);
};