var chalk = require("chalk");

var message = (chalk.blue('Hello ') + chalk.yellow.underline("World!"));
console.log(message);
var message2 = (chalk.red('Hello on the other side ') + 
chalk.rgb(123, 45, 67).underline("! ")+ chalk.hex('#DEADED').bold('Bold lilac! and ...')+
chalk.rgb(78, 130, 112).underline('Underlined secret color'));
console.log(message2);

//Combine styled and normal strings
var message3 = chalk.hex('#D4AF37').underline('This is another test') + chalk.blue(' World') + chalk.red('!')
console.log(message3);

