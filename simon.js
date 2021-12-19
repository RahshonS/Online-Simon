console.log("Hello");

const light = ['red', 'yellow', 'blue', 'green'];

//Full sequence should yield ---> red , blue , green, yellow, blue 
//Goal: 0 --> 0 , 2 --> 0, 2, 3 ---> 
let testArray = [0,2,3,1,2];

let maxLevel = 5;

for(let i = 0; i < maxLevel; i++){
    let currLevel = i + 1;
    console.log("LEVEL:" + currLevel);


    for(let k = 0; k <= i; k++){
        //grab a number from the test array... use this to trigger the appropriate light
        //make sure we stay within the test array bounds
        
        currLight = testArray[k];
        //console.log("Test Array Num is: " + currLight);

        //Plug the number (currLight) into the light array to trigger the appropriate light
        let colorToTrigger = light[currLight];

        console.log(colorToTrigger);
    }
    
    
}

//RANDOM NUMBER GENERATOR LOGIC
/*
let ranNum = Math.random();
ranNum = (ranNum * 10);
console.log("Random num is: " + ranNum);
ranNum = Math.ceil(ranNum);
console.log("Random num (ceiling) is: " + ranNum);
ranNum = ranNum % 5;
console.log("Random num:" + ranNum);
*/

/*
if(ranNum == 4){
    console.log("Random num is Zero");
}
else{
    console.log("Random num:" + ranNum);
}*/

console.log("----RANDOM RUN----");

//let arrSize = 5;
let ranArray= [];

//console.log("Array length " + ranArray.length);
for(let n = 0; n < 5; n++){
    let ranNum = genRandomNum();
    ranArray[n] = ranNum;
}

console.log("Array: " + ranArray);

function genRandomNum(){
    let ranNum = Math.random();
    ranNum = (ranNum * 10);
    ranNum = Math.ceil(ranNum);
    ranNum = ranNum % 4;

    return ranNum;
}


