let correctDoorNumber = 3;
let participantGuesses = [3,3,2,3,3,2,2,3,2,2,1,1,1,1];

function montyHall(correctDoorNumber, participantGuesses) {
    let switchToCorrectDoor = 0;

    for( let i = 0; i<participantGuesses.length;i++){
        
        if (participantGuesses[i] == correctDoorNumber) {
            participantGuesses[i] = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
        else{
            participantGuesses[i] = correctDoorNumber;
            switchToCorrectDoor ++;  
        }
    }
    
    return Math.floor((switchToCorrectDoor/participantGuesses.length) * 100);

}

console.log(montyHall(correctDoorNumber, participantGuesses));

