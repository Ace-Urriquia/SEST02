// Modules(files): Self-container units of code that encapsulates variables and functions
const letters = ["A", "B", "C"];

function displayLetters() {
  letters.forEach((letter) => {
    console.log(letter);
  });
  
}


module.exports = {
  letters: letters,
  displayLetters,
};