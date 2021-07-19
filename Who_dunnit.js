// #### Episode 1
//this one seems fine

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//after running the terminal it seems that everything works. No errors.

// #### Episode 2
//possible issue with murderer as it has a const that should not be change
//changing the const to let will allow us to reassing another name like "Mrs.Peacock" if needed.

// let murderer = 'Professor Plum';

// let changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// let declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// #### Episode 3
//It should work. No errors.

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);


// #### Episode 4
//Should work.
//Possible issue if we want the suspectThree to still be the new one "Colonel Mustard" we need to reasign the value
//outside the function


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// suspectThree = "Colonel Mustard";
// const suspects = declareAllSuspects();
// console.log(suspects)
// console.log(`Suspect three is ${suspectThree}.`);


// #### Episode 5

//Should work 

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);


// #### Episode 6
//The murderer should be Mrs.White 
//Should be working and returning the right name

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// #### Episode 7
//the let on plotTwist is not necessary?
//removing let will have Miss Scarlet returned
// not removing let will return Mr.Green (because the let will not prevent checking the other options)
//

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//      murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

//Unable to change unexpectedOutcome and ploTwist as it gives an error 

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);



// #### Episode 8
// //Should work
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
// //   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);


// #### Episode 9

// the let needs to be removed from the line of Mrs.Peackock 
// not removing let will have Professor Plum returned

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//    murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);


//Extension EPISODE 10

// let people = {
//     murderer = "Mrs. Hyde",
//     room = "Attic",
//     weapon = "Walking stick"

// };

let suspects = ['Mr.Hyde', 'Mrs. Hyde', 'Hannibal Lecter'];

let killer = suspects[2];

const declareMurderer = function(){
    return `The murderer is ${killer}.`;
}

const veredict = declareMurderer();
console.log(veredict);
