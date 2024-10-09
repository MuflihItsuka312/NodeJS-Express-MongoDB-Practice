const validator = require('validator');
const readline = require('readline');
const fs = require('fs');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Masukan nama Mail ', (mail) => {
  rl.question('Masukan Password ', (password) => {
     rl.question('masukan nomor telpon ', (NoTelp) => {
        rl.question('masukan nomor bitcoin address ', (Btcaddr) => {
        const powerNumber = Number(NoTelp);
        
        const mailvalidator = validator.isEmail(mail);
        const btcaddrval = validator.isBtcAddress(Btcaddr);
   const contact = {
    mail: mailvalidator,
    password,
    NoTelp: powerNumber,
    Btcaddr: btcaddrval,
  };
  fs.readFile('phonebook.json', 'utf8', (err, file) => {
    if (err) throw err;

    // Parse JSON data
    const data = JSON.parse(file);

    // Append new contact
    data.push(contact);

    // Write updated data back to fraction.json
    fs.writeFile('phonebook.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Power berhasil ditambahkan', contact);
      rl.close();
    });
  });
 });
 });
});
});