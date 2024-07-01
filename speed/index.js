
const prompt = require('prompt-sync')();function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Example usage
const speed = parseFloat(prompt("Enter the speed of the car (km/h):"));
checkSpeed(speed);
