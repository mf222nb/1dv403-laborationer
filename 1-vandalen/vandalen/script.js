"use strict";

var makePerson = function(persArr){


	// Din kod här...
    var personAges;
    var totalSum;
    var personNames;
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
    
    personNames = persArr.map(function(personName){
       return personName.name;
    });
    
    //Sorterar arrayen på alla tecekn inklusive å, ä och ö
    personNames.sort(function(a, b){
        return a.localeCompare(b);
        
    });
    
    personObj.names = personNames.reduce(function(prevName, name, i, personNames){
        return prevName + ", " + name;
    });
    
    return personObj;
    
};

