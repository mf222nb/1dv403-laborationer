"use strict";

var makePerson = function(persArr){


	// Din kod här...
    var name;
    var averageAge;
    var personAges;
    var totalSum;
    var personObj = {};
    
    //Skapar en array som tar ut alla age från persArr arrayen
    personAges = persArr.map(function(person){
        return person.age;
    });
    
    personObj.minAge = personAges.reduce(function(prevAge, age, i, personAges){
        return Math.min(prevAge, age);
    });
    
    personObj.maxAge = personAges.reduce(function(prevAge, age, i, personAges){
        return Math.max(prevAge, age);
    });
    
    totalSum = personAges.reduce(function(prevAge, age, i, personAges) {
        return prevAge + age;
    });
    
    personObj.averageAge = Math.round(totalSum/personAges.length);
    //console.log(personAges); 
    
    return personObj;
    
};

