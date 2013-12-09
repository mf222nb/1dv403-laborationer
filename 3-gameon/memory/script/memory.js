"use strict";
var MemoryApp = {
    
    init: function(rows, cols){
        var randomResult = RandomGenerator.getPictureArray(rows, cols);
        
        MemoryApp.memoryBoard(rows, cols);
        
        MemoryApp.property(randomResult);
    },
    
    property: function(randomResult){
        var olle = randomResult;
        console.log(olle);
    },
    
    memoryBoard: function(rows, cols){
        var table = document.createElement("table");
        var main = document.getElementById("main");
        
        table.id = ("table");
        table.className = ("table");
        
        for (var i = 0; i <= rows; i++) {
            var tr = document.createElement("tr");

            for (var n = 0; n < cols; n++) {
                var img = document.createElement("img");
                img.src = "memory/pics/0.png";
                
                var td = document.createElement("td");
                td.appendChild(img);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        main.appendChild(table);
    }
};

window.onload = function(){
    MemoryApp.init(4,5);    
};