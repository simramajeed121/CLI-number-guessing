import inquirer from "inquirer";
// //computer will generate a random number
// //user input for guessing number
// //the user inputted number and computer generated number to be compared and check whether they matches or not
// const random_number=16;
const random_number = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);
if (answers.userguessednumber === random_number) {
    console.log("congratulations ! you have guessed the right number");
}
else {
    console.log(" Ooops ! you have guessed the wrong number ");
}
