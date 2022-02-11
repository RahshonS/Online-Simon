


console.log("Let's Play Memory Blocks");
console.log(' ');

const light = ['red', 'yellow', 'green', 'blue'];
let ranArray= [];

const btnRed = document.getElementById('red-btn');
const btnYellow = document.getElementById('yellow-btn');
const btnGreen = document.getElementById('green-btn');
const btnBlue = document.getElementById('blue-btn');

let maxLevel = 5;

//BUTTON CODE
/*
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
*/


//to call
//await buttonPress()


//PROMISE: Create a promise that ensures that a button will be pressed by the player in the future 
/*
let _btnPress;

async function buttonPress(){

    let buttonPress = new promises((resolve, reject) => {
        //promise definition 
        //... 


        //handlers: Resolve (if) else (reject)
        let press = true;
        if(press){
            //resolve
            console.log("btn pressed");
        }
        else{
            //reject()
            console.log("No press");
        }
    })
    
    
    buttonPress.then(() => {

    }).catch(() => {

    })
}
*/


setupGame();

function setupGame(){
    //console.log('Sup');


    //let arrSize = 5;
    //let ranArray= [];

    //console.log("Array length " + ranArray.length);
    for(let n = 0; n < 5; n++){
        let ranNum = genRandomNum();
        ranArray[n] = ranNum;                                       //Array of random numbers
    }

    //ARRAY in NUMS
    console.log("Rand Array: " + ranArray);
    console.log('');

    //Call beginGame
    beginGame(ranArray);
}



async function beginGame(ranArray){
    let currLevel;
    //GAME LOGIC
    for(let i = 0; i < maxLevel; i++){
        currLevel = i + 1;
        console.log("LEVEL:" + currLevel);

        let newestLight;                //Will keep track of the most recent light added to the sequence. Use later to match to the users guess


        for(let k = 0; k <= i; k++){
            //grab a number from the test array... use this to trigger the appropriate light
            //make sure we stay within the test array bounds
        
            currLight = ranArray[k];
            //console.log("ranArray Num is: " + currLight);

            //Plug the number (currLight) into the light array to trigger the appropriate light
            let colorToTrigger = light[currLight];

            console.log(colorToTrigger);

            newestLight = colorToTrigger;
        }

        

    console.log('NEWEST LIGHT IN SEQUENCE: ' + newestLight);

    //call questionUser
    //let timeoutID = setTimeout(questionUser(newestLight), (1000 * 120));

    //THE TIMEOUT THAT WORKS
    //let timer = setTimeout(gameOver, 30000);
    
    //--- COMMENT THIS OUT TO STOP A LOOP / PROMPT ON LOAD --- 
    //questionUser(newestLight);

    

    //Requires button inputs from the user in order to progress through the game
    //?? await userInput(currLevel); 
    await userInput(currLevel);

    //Requires prompts from the user in order to progress from level to level 
    //userInput2(currLevel);

    //userInput3(currLevel);
    
    console.log(' ');
}
}


let userChoice;
let selection;

async function userInput(currLevel){
    
    let answer = ranArray[0];
    //let selection;
    let userClick = false;

    console.log('Awaiting user input');

    
    let prom = await new Promise((resolve, reject) => {

        //userChoice = resolve;
        
        let pick = btnSelection();    
        //btnSelection();

        if(answer == pick){
            //console.log('Res');
            resolve(console.log('Correct!'));
            //userChoice = resolve();
        }
        else if(pick == 6){
            //console.log('rejjie');
            reject('rej');
        }
            

    });

    prom
    .then((msg) => {
        console.log('then' + msg)
    })
    .catch((msg) => {
        console.log('catch' + msg)
    });

}

//This function will ensure that the right button is selected by the user 
async function userInput3(currLevel){
    
    console.log('User input 3 awaiting.. ')

    let userAction = false;

    while(userAction != true){
        let i = 0;
        while(i <= 10){
            i++;
        }

        if(i = 10){
            userAction = true;
        }
    }

}

function btnSelection(){

    /*
    let correctGuesses = 0;
    let selection;
    let pos = 0;
    let answer = ranArray[pos];
    let test = 0;
    let userClick = false;
    */

        btnRed.addEventListener('click', ()=> {
            console.log('Red button clicked');
            //selection = 0;
            //userClick = true;
            //console.log('selection = ' + selection);
            return 0;
    
        });
        
        btnYellow.addEventListener('click', ()=> {
            console.log('Yellow button clicked');
            //selection = 1;
            //userClick = true;
            //console.log('selection = ' + selection);
            return 1;
        });
        
        btnGreen.addEventListener('click', ()=> {
            console.log('Green button clicked');
            //selection = 2;
            //userClick = true;
            //console.log('selection = ' + selection);
            return 2;
        });
        
        
        btnBlue.addEventListener('click', ()=> {
            console.log('Blue button clicked');
            selection = 3;
            //userClick = true;
            console.log('selection = ' + selection);
            return 3;
        });
    
        /*
        if(selection == answer){
            pos++;
            correctGuesses++;
            console.log('You guessed correctly');
        }
        else{
            console.log('nope');
        }
        */

        //test++;
}
    



//Param (currLevel): current level for current level = the amount of guesses needed from the user 
//Param (newestLight): Serves as the string the user needs to guess correctly in order to get the prompt right and continue the game
function userInput2(currLevel){
    //console.log("LEVEL:" + currLevel);

    //THE TIMEOUT THAT WORKS
    //let timer = setTimeout(gameOver, 30000);
    let correctSeq = false;
    let numCorrect = 0;
    let currLight = 0;

    //This loop stops the levels from progessing but causes an infinte loop 
    //T && T = enter Loop
    while((correctSeq != true)){
        console.log('In loop');
        //let currLight = 0;
        let pos = ranArray[currLight];          //grabs a number from random array 
        let light2Guess = light[pos];


        console.log('curr light: ' + currLight);
        console.log('answer will be: ' + light2Guess);
        let userGuess = prompt('What light was added to the sequence during this level? ');
        if(userGuess == light2Guess){
            numCorrect++;
        }
        else{
            console.log('nah');
            while(userGuess != light2Guess){
                console.log('Correct answer: ' + light2Guess);
                userGuess = prompt('What light was added to the sequence during this level? ');
                if(userGuess == light2Guess){
                    numCorrect++;
                }
            }
        }

        
        if(numCorrect == currLevel){
            correctSeq = true;
        }
    
        currLight++;
    }

    currLight *= 0;

    
}


function questionUser(newestLight){
    //Call timer Here?

    //let userGuess = prompt('What light was added to the sequence during this level? ');

    //THE TIMEOUT THAT WORKS
    let timer = setTimeout(gameOver, 30000);

    btnBlue.addEventListener('click', ()=> {
        clearTimeout(timer);
        console.log('Timer reset');
    });

    

    /*
    while(userGuess != newestLight){
        

        console.log('Nope. Guess again');
        userGuess = prompt('What light was added to the sequence during this level? ');   
    }
    */

    let correctAnswer = newestLight;

    //let timeoutID = setTimeout(resetGame(), 100000);

    /*
    if(userGuess == correctAnswer){
        console.log('Correct!');
        //Cancel call to game over
        clearTimeout(timer);
    }
    else if(userGuess != correctAnswer){
        console.log('Sorry. That is incorrect');
        console.log('The correct answer was ' + correctAnswer);
        //call setup game
        gameOver();
    }
    */

    //clearTimeout(restartGame());
}


function checkAnswer(){
    //Check to see if the user has chosen the correct answer 
    //if they have.. continue ?
    //if not ask again by calling question user ? 
}

function gameOver(){
    console.log('Game over man');
    console.log(' ');
    setupGame();
}


function restartGame(){
    console.log('Game has been reset');
    let timeoutID2 = (setupGame(), 5000);
}

//Generate a random number between 0 - 3 (inclusive)
function genRandomNum(){
    let ranNum = Math.random();
    ranNum = (ranNum * 10);
    ranNum = Math.ceil(ranNum);
    ranNum = ranNum % 4;

    return ranNum;
}


