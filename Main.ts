// Que 27: Alien Colors #3: Turn your if-else chain from Exercise 24 - 25 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// =========================================================================================================================

// Turn your if-else chain from Exercise 24 - 25 into an if-else chain.
let alienColors: string = "green";

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// • If the alien is green, print a message that the player earned 5 points.
//   Version 1 of the program
if(alienColors === "green") {
    console.log("Version 1: The player earned 5 points.");
} 
else if (alienColors === "yellow") {
    console.log("The player earned 10 points.");
} 
else if (alienColors === "red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Please select right color.");
}

// • If the alien is yellow, print a message that the player earned 10 points.
//   Version 2 of the program
alienColors = "yellow";

if(alienColors === "green") {
    console.log("The player earned 5 points");
} 
else if (alienColors === "yellow") {
    console.log("Version 2: The player earned 10 points.");
} 
else if (alienColors === "red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Please select right color.");
}

// • If the alien is red, print a message that the player earned 15 points.
//   Version 3 of the program
alienColors = "red";

if(alienColors === "green") {
    console.log("The player earned 5 points");
} 
else if (alienColors === "yellow") {
    console.log("The player earned 10 points.");
} 
else if (alienColors === "red") {
    console.log("Version 3: The player earned 15 points.");
}
else {
    console.log("Please select right color.");
}