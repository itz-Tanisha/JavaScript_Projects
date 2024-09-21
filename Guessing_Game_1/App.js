// User enters a max number and tries to guess between 1 and max no 

// ask user to enter a max number

const max = prompt("Enter the max number");
const random = Math.ceil(Math.random() * max);

let guess = prompt("Enter your guess");

while(true){

    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        alert("Congrats !! You are right !");
        break;

    } else if (guess < random){
        guess = prompt("Try a larger number");

    } else if ( guess > random){
        guess = prompt("Try a smaller number");
    
    }
}


