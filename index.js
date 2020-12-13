const readline = require('readline-sync');

const chalk = require('chalk');

let name = readline.question("What's your name? ");

let dob;
do {
  dob = readline.question("When were you born [31/12/2000]? ");
} while(isNaN(parseInt(dob)));

let year = parseInt(dob.slice(-4));

let leap = false;

if(year % 400 === 0)
{
  leap = true;
}
else if(year % 100 === 0)
{
  leap = false;
}
else if(year % 4 === 0)
{
  leap = true;
}
else
{
  leap = false;
}

console.log("\n");

if(leap)
{
  console.log(chalk.underline.bold(name) + ", " + chalk.black.bgGreen.bold("you were born in a leap year."));
  console.log(chalk.bold.bgMagenta("\nYou should tell your friends about it."));
}
else
{
  console.log(chalk.underline.bold(name) + ", " + chalk.black.bgRed.bold("you were not born in a leap year."));
}