/**
    knock - knock jokes 
 * **/

//question collection
const collection = {
    knock: ["Knock, knock"],

    firstQuestion: ["Who's there ?"],

    knockNames: ["Annie", "Lettuce", "Boo", "Cow", "Tank", "Harry", "Atch", "Olive", "Orange", "Europe", "hein"],

    secondQuestion: ["Who?"],

    secondAnswer: ["you doing today?", "it take to get you to open the door?", "not, here I come!", "be a better punchline than this!", "SO YOU CAN HEAR ME!", "come out now?", "you know unless you open the door?"]
}

//to generate random number
let generateRandomNumber = (input) => {
    return Math.floor(Math.random() * input);
}

//to capatilize first letter
let capatilizeFirstLetter = (letter) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
}


//to generate knock knock
let generateRandomKnockKnock = (value) => {
    let tempName = "No name"
    for (let properties in value) {
        let randomNumber = generateRandomNumber(collection[properties].length);
        switch (properties) {
            case "knock":
                console.log(capatilizeFirstLetter(collection[properties][randomNumber]));
                break;
            case "firstQuestion":
                console.log(capatilizeFirstLetter(collection[properties][randomNumber]));
                break;
            case "knockNames":
                tempName = collection[properties][randomNumber];
                console.log(capatilizeFirstLetter(collection[properties][randomNumber]));
                break;
            case "secondQuestion":
                console.log(capatilizeFirstLetter(tempName) + " "  + capatilizeFirstLetter(collection[properties][randomNumber]));
                break;
            case "secondAnswer":
                console.log(capatilizeFirstLetter(collection[properties][randomNumber]));
                break;
            default:
                break;
        }
        // console.log(properties);
    }
}

generateRandomKnockKnock(collection);
