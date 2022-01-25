

console.log("Let's Play Memory Blocks");
console.log(' ');

const light = ['red', 'yellow', 'blue', 'green'];
let ranArray= [];

const btnRed = document.getElementById('red-btn');
const btnYellow = document.getElementById('yellow-btn');
const btnGreen = document.getElementById('green-btn');
const btnBlue = document.getElementById('blue-btn');

let maxLevel = 5;

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


//PROMISE: Create a promise that ensures that a button will be pressed by the player in the future 
/*
const btnPressed = new Promise((resolve, reject) => {
    //If( button is pressed by player (promise fulfilled)){
        resolve('Promise Fulfilled');
    }
    else{
        //If a button is not pressed by the player reject (promised not fulfilled)
        reject('Error Occurred')
    }
})

//Handle the outcome of a promise 
btnPressed.then((doThing) => {
    //Handle / Expand upon resolve (success)
}).catch((doThing) => {
    //Error occurred.. Handle Rejection 
})
*/


setupGame();

function setupGame(){
    //console.log('Sup');


    //let arrSize = 5;
    //let ranArray= [];

    //console.log("Array length " + ranArray.length);
    for(let n = 0; n < 5; n++){
        let ranNum = genRandomNum();
        ranArray[n] = ranNum;
    }

    //ARRAY in NUMS
    console.log("Rand Array: " + ranArray);
    console.log('');

    //Call beginGame
    beginGame(ranArray);
}



function beginGame(ranArray){
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
            //console.log("Test Array Num is: " + currLight);

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
    //userInput(currLevel);

    //Requires prompts from the user in order to progress from level to level 
    userInput2(currLevel, newestLight);
    
    console.log(' ');
}
}


//Responsible for monitoring user button clicks 
//A timer is started that threatens to restart the game 
//Each button click cancels that timer
//Check if the right button was pressed after each click from the user so curr lvl must be known
function userInput(currLevel){
    //console.log("LEVEL:" + currLevel);

    //THE TIMEOUT THAT WORKS
    //let timer = setTimeout(gameOver, 30000);
    let userChoice;
    let i = 0;
    let correctSeq = false;
    let numCorrect = 0;

    //This loop stops the levels from progessing but causes an infinte loop 
    //T && T = enter Loop
    while((correctSeq != true) && (numCorrect < currLevel)){
        console.log('in loop');

        userGuess = prompt('What light was added to the sequence during this level? ');  
        if(userGuess == 'red'){
            numCorrect++;
        }

        if(numCorrect == currLevel){
            correctSeq = true;
        }


        btnRed.addEventListener('click', ()=> {
            console.log('Red button clicked');
            userChoice = 0;
             //while correctSeq != true 
            if(userChoice == ranArray[i]){
                //clearTimeout(fcn that resets game)
                console.log('correct');
                numCorrect++;
            }
        });
        
        btnYellow.addEventListener('click', ()=> {
            console.log('Yellow button clicked');
            userChoice = 1;
            if(userChoice == ranArray[i]){
                //clearTimeout(fcn that resets game)
                console.log('correct');
                numCorrect++;
            }
        });

        btnBlue.addEventListener('click', ()=> {
            console.log('Blue button clicked');
            //clearTimeout(timer);
            console.log('Timer reset');
            userChoice = 2;
            if(userChoice == ranArray[i]){
                //clearTimeout(fcn that resets game)
                console.log('correct');
                numCorrect++;
            }
        });
        
        btnGreen.addEventListener('click', ()=> {
            console.log('Green button clicked');
            userChoice = 3;
            if(userChoice == ranArray[i]){
                //clearTimeout(fcn that resets game)
                console.log('correct');
                numCorrect++;
            }
        });
    
        i++;
        
        if(numCorrect == currLevel){
            correctSeq = true;
        }
    }
    
}

//Param (currLevel): current level for current level = the amount of guesses needed from the user 
//Param()
function userInput2(currLevel){
    //console.log("LEVEL:" + currLevel);

    //THE TIMEOUT THAT WORKS
    //let timer = setTimeout(gameOver, 30000);
    let userChoice;
    let i = 0;
    let correctSeq = false;
    let numCorrect = 0;

    //This loop stops the levels from progessing but causes an infinte loop 
    //T && T = enter Loop
    while((correctSeq != true) && (numCorrect < currLevel)){
        console.log('in loop');

        userGuess = prompt('What light was added to the sequence during this level? ');  
        if(userGuess == 'red'){
            numCorrect++;
        }

        if(numCorrect == currLevel){
            correctSeq = true;
        }


        btnRed.addEventListener('click', ()=> {
            console.log('Red button clicked');
            userChoice = 0;
             //while correctSeq != true 
            if(userChoice == ranArray[i]){
                //clearTimeout(fcn that resets game)
                console.log('correct');
                numCorrect++;
            }
        });
        
        btnYellow.addEventListener('click', ()=> {
            console.log('Yellow button clicked');
            userChoice = 1;
            if(userChoice == ranArray[i]){
                //clearTimeout(fcn that resets game)
                console.log('correct');
                numCorrect++;
            }
        });

        btnBlue.addEventListener('click', ()=> {
            console.log('Blue button clicked');
            //clearTimeout(timer);
            console.log('Timer reset');
            userChoice = 2;
            if(userChoice == ranArray[i]){
                //clearTimeout(fcn that resets game)
                console.log('correct');
                numCorrect++;
            }
        });
        
        btnGreen.addEventListener('click', ()=> {
            console.log('Green button clicked');
            userChoice = 3;
            if(userChoice == ranArray[i]){
                //clearTimeout(fcn that resets game)
                console.log('correct');
                numCorrect++;
            }
        });
    
        i++;
        
        if(numCorrect == currLevel){
            correctSeq = true;
        }
    }
    
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


function genRandomNum(){
    let ranNum = Math.random();
    ranNum = (ranNum * 10);
    ranNum = Math.ceil(ranNum);
    ranNum = ranNum % 4;

    return ranNum;
}


