"use strict";

window.onload = function(){

	
	var birthday = function(date){
	
	//Tittar om det inmatade datumet stämmer överrens med ÅÅÅÅ-MM-DD
    if (!date.match(/(\d{4})\-(\d{2})\-(\d{2})/)) {
        throw {message: "FEL! Ange i formatet ÅÅÅÅ-MM-DD"};
    }

    var currentTime = new Date();
        
    var array = date.split('-');
    //Sätter datumet till år, månader och dagar
    var birthday = new Date(array[0], array[1] - 1, array[2]);
    //Omvandlar allt till dagar
    var days = ((birthday.getTime() - currentTime.getTime())/(1000*60*60*24));
    
    var remainingDays = Math.ceil(days);
    //Tittar så att man inte matar in ett datum som redan har varit och kastar då ett meddelande till användaren
    if(remainingDays < 0)
    {
        throw {message: 'Du kan inte ange ett datum som redan varit'};
    }
    return remainingDays;

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};