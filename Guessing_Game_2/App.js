Advanced 

let random = Math.ceil(Math.random() *10);

alert("You have 10 attempts to guess the number. The number changes with every attempt");

let count = 1;

while(count <= 10){

    let guess = prompt(`Enter your guess ${count} : `);

    if(guess == random){

        alert("Congragulations you won");
        break;

    } else {
        console.log(`random : ${random} , guess : ${guess}`);
        random = Math.ceil(Math.random()*10);
        
    }

    count++;
    
    if(count > 10){
        alert("Better Luck Next Time");
    }
}
