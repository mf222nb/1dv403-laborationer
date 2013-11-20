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
    
    //Tar ut den minsta åldern av de åldrar som finns i arrayen som vi skapade
    personObj.minAge = personAges.reduce(function(prevAge, age, i, personAges){
        return Math.min(prevAge, age);
    });
    
    //Tar ut max åldern av de åldrar som finns i arrayen som vi skapade
    personObj.maxAge = personAges.reduce(function(prevAge, age, i, personAges){
        return Math.max(prevAge, age);
    });
    
    //Adderar alla åldrar som finns i personAges arrayen och sparar undan dem i en variabel.
    totalSum = personAges.reduce(function(prevAge, age, i, personAges) {
        return prevAge + age;
    });
    
    //Tar och delar alla åldrar som man sparade undan med antal åldrar som finns i arrayen
    personObj.averageAge = Math.round(totalSum/personAges.length);
    
    //Skapar en array som tar ut alla namnen ur persArr arrayen
    personNames = persArr.map(function(personName){
       return personName.name;
    });
    
    //Sorterar arrayen på alla tecekn inklusive å, ä och ö
    personNames.sort(function(a, b){
        return a.localeCompare(b);
        
    });
    
    //Tar ut alla namn och gör den till en sträng istället för en array
    personObj.names = personNames.reduce(function(prevName, name, i, personNames){
        return prevName + ", " + name;
    });
    
    return personObj;
    
};

