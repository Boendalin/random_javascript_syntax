function decideLanguage() {
    let languages = ["Swedish", "English", "Danish"];

    return languages[Math.floor(Math.random()*languages.length)];
}

function phrase(language) {
    let phrases = [];
    switch (language){
        
        case "Swedish":
            phrases = [ "Allt klär en hönsskit.", 
                            "Var man blir salig på sin tro.", 
                            "Nä, här blir det inga barn gjorda."];
            break;

        case "English":
            phrases = [ "Everything looks good on a chicken turd.",
                            "Each man will be blessed by his own faith.",
                            "Nope, no kids will be made here."];
            break;

        case "Danish":
            phrases = [ "Allt er smukt på en hønseskidt.",
                            "Alle vil blive velsignet på sin egen tro.",
                            "Nej, her kommer da slet ikke blive nogle børn."];
            break;

        default:
            phrases = ["I don't know this langauge."];
            break;
    };

    return phrases[Math.floor(Math.random()*phrases.length)];
}

function famousPerson(){
    let persons = ["Burt Reynolds", "Barrack Obama", 
                    "Astrid Lindgren", "Mette Fredriksen",
                    "Abdallah ibn Jakut"];

    return persons[Math.floor(Math.random()*persons.length)];
}

function returnMessage() {
    console.log(phrase(decideLanguage()) );
    console.log(" - " + famousPerson());    
}

returnMessage()

//console.log(famousPerson(), decideLanguage(), phrase(decideLanguage()))

