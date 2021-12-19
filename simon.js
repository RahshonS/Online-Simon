console.log("Hello and welcome to Online Simon");
console.log(' ');

const light = ['red', 'yellow', 'blue', 'green'];

//Full sequence should yield ---> red , blue , green, yellow, blue 
//Goal: 0 --> 0 , 2 --> 0, 2, 3 ---> 
let testArray = [0,2,3,1,2];

let maxLevel = 5;

//let arrSize = 5;
let ranArray= [];

//console.log("Array length " + ranArray.length);
for(let n = 0; n < 5; n++){
    let ranNum = genRandomNum();
    ranArray[n] = ranNum;
}

//console.log("Rand Array: " + ranArray);

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

    let userGuess = prompt('What light was added to the sequence during this level? ');
    let correctAnswer = newestLight;

    if(userGuess == correctAnswer){
        console.log('Correct!');
    }
    else if(userGuess != correctAnswer){
        console.log('Sorry. Thank is incorrect. Game Over.');
    }
    
    console.log(' ');
}





function genRandomNum(){
    let ranNum = Math.random();
    ranNum = (ranNum * 10);
    ranNum = Math.ceil(ranNum);
    ranNum = ranNum % 4;

    return ranNum;
}


