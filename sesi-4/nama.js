const readline = require('readline');
const fs = require('fs');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Masukan nama Entitas ', (nama) => {
  rl.question('Masukan nama fraksi ', (Fraksi) => {
     rl.question('dari sekala 1-1000 seberapa kuat beliau? ', (Power) => {
   const contact = {
    nama,
    Fraksi,
    Power,
  };
   const file = fs.readFileSync('fraction.json', 'utf8');
   const data = JSON.parse(file);
   data.push(contact);
     fs.writeFileSync('fraction.json', JSON.stringify(contact));
   console.log(contact);
   rl.close();
       }); 
    }); 
});