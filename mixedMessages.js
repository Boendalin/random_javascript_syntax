function decideLanguage() {

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
    };
}

function famousPerson(){
    let persons = ["Burt Reynolds", "Barrack Obama", 
                    "Astrid Lindgren", "Mette Fredriksen",
                    "Abdallah ibn Jakut"]

    return persons[Math.floor(Math.random()*persons.length)]
}
console.log(famousPerson())

