/*

Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the
name of each animal. • Modify your program to print a statement about each animal,
such as A dog would make a great pet. • Add a line at the end of your program stating
 what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!




*/
var animals = ["spider monkey", "lemur", "giraffe"];
for (var i = 0; i < animals.length; i++) {
    console.log('my sweet animal  : ' + animals[i]);
    //     console.log('Dear Mr. ' + Guest[i] + ',\n\n Please be informed that you have been invited by us today at sharp 9.00 pm!'  + '\n\n');
}
//Add a line at the end of your program stating
//what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
for (var i = 0; i < animals.length; i++) {
    // console.log('my sweet animal  : ' + animals[i]);
    console.log("A ".concat(animals[i], " has a long tail."));
}
console.log(("\nAll of these animals have long tails."));
