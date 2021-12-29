

console.log("Hello and welcome to Online Simon");
console.log(' ');

const light = ['red', 'yellow', 'blue', 'green'];

const btnRed = document.getElementById('red-btn');
const btnYellow = document.getElementById('yellow-btn');
const btnGreen = document.getElementById('green-btn');
const btnBlue = document.getElementById('blue-btn');

let maxLevel = 5;


btnRed.addEventListener('click', ()=> {
    console.log('Red button clicked');
});

btnYellow.addEventListener('click', ()=> {
    console.log('Yellow button clicked');
});

btnGreen.addEventListener('click', ()=> {
    console.log('Green button clicked');
});

btnBlue.addEventListener('click', ()=> {
    console.log('Blue button clicked');
});


//PROMISE: Create a promise that ensures that a button will be pressed by the player in the future 
/*
const btnPressed = new Promise((resolve, reject) => {
    //If button is pressed by player resolve (promise fulfilled)
    //If a button is not pressed by the player reject (promised not fulfilled)
})

btnPressed.then((doThing) => {
    //Handle / Expand upon resolve (success)
}).catch((doThing) => {
    //Error occurred.. Handle Rejection 
})
*/


setupGame();

function setupGame(){
    console.log('Sup');


    //let arrSize = 5;
    let ranArray= [];

    //console.log("Array length " + ranArray.length);
    for(let n = 0; n < 5; n++){
        let ranNum = genRandomNum();
        ranArray[n] = ranNum;
    }

    //console.log("Rand Array: " + ranArray);

    //Call beginGame
    beginGame(ranArray);
}



function beginGame(ranArray){
    //GAME LOGIC
    for(let i = 0; i < maxLevel; i++){
        let currLevel = i + 1;
        console.log("LEVEL:" + currLevel);

        let newestLight;                //Will keep track of the most recent light added to the sequence. Use later to match to the users guess


        for(let k = 0; k <= i; k++){
            //grab a number from the test array... use this to trigger the appropriate light
            //make sure we stay within the test array bounds
        
            currLight = ranArray[k];
            //console.log("Test Array Num is: " + currLight);

            //Plug the number (currLight) into the light array to trigger the appropriate light
            let colorToTrigger = light[currLight];

            console.log(colorToTrigger);

            newestLight = colorToTrigger;
        }

    console.log('NEWEST LIGHT IN SEQUENCE: ' + newestLight);

    //call questionUser
    //let timeoutID = setTimeout(questionUser(newestLight), (1000 * 120));
    setTimeout(() => {questionUser(newestLight)}, (1000 * 120));
    

    
    console.log(' ');
}
}



function questionUser(newestLight){
    //Call timer Here?
    

    let userGuess = prompt('What light was added to the sequence during this level? ');
    let correctAnswer = newestLight;

    let timeoutID = setTimeout(resetGame(), 100000);

    if(userGuess == correctAnswer){
        console.log('Correct!');
    }
    else if(userGuess != correctAnswer){
        console.log('Sorry. That is incorrect');
        console.log(correctAnswer + ' was the correct answer');
        console.log('Game Over.');
        //call setup game
    }

    clearTimeout(restartGame());
}


function restartGame(){
    console.log('Game has been reset');
    let timeoutID2 = (setupGame(), 550000);
}


function genRandomNum(){
    let ranNum = Math.random();
    ranNum = (ranNum * 10);
    ranNum = Math.ceil(ranNum);
    ranNum = ranNum % 4;

    return ranNum;
}


