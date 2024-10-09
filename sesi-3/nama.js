const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  rl.question('What do you think of Jebonscript? ', (answer2) => {
  console.log(`Thank you for your valuable feedback: ${answer} and ${answer2}`);
  rl.close();
    }); 
});