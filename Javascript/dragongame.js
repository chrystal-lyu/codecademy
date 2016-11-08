var user = prompt("A dragon is in your way! FIGHT it, SING a song to it, or RUN?").toUpperCase();

switch (user) {
    case "FIGHT":
        var weapon = prompt("Do you have a weapon?").toUpperCase();
        var smart = prompt("Are you smart?").toUpperCase();
        if (weapon === "YES" || smart === "YES") {
            console.log ("Fire on! Hold on tight!")
        } else {
            console.log ("Too bad. You are not strong enough to fight the dragon! Run fast!")
        };
        break;
    case "SING":
        var voice = prompt("Can you sing?").toUpperCase();
        var language = prompt("Can you sing in dragonese?").toUpperCase();
        if (voice === "YES" && language === "YES") {
            console.log ("What a beautiful voice! The dragon is dreaming! Now get around the dragon and escape!")
        } else {
            console.log ("Then you better fight or run! The dragon is out of temper!")
        };
        break;
    case "RUN":
        console.log ("Be careful! Run fast! The dragon is right behind you!")
        break;
    default:
        console.log ("Hmm...I don't know what you did...but it seems the dragon had his dinner!")
};
