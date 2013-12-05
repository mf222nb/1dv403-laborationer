"use strict";
var MemoryApp = {
    
    init: function(rows, cols){
        var randomResult = RandomGenerator.getPictureArray(rows, cols);

        MemoryApp.property(randomResult);
    },
    
    property: function(randomResult){
        var olle = randomResult;
        alert(olle);
    },
    
    memoryBoard: function(){
        
    }
};

window.onload = function(){
    MemoryApp.init(4,5);    
};