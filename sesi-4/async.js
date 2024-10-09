const readline = require('readline');
const fs = require('fs');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Masukan nama Entitas ', (nama) => {
  rl.question('Masukan nama fraksi ', (Fraksi) => {
    rl.question('Dari skala 1-1000, seberapa kuat beliau? ', (Power) => {
      // Convert Power input to a number
      const powerNumber = Number(Power);

      // Create Object 
      const contact = {
        nama,
        Fraksi,
        Power: powerNumber, // Store the number instead of the string
      };

      // Read existing data from fraction.json
      fs.readFile('fraction.json', 'utf8', (err, file) => {
        if (err) throw err;

        // Parse JSON data
        const data = JSON.parse(file);

        // Append new contact
        data.push(contact);

        // Write updated data back to fraction.json
        fs.writeFile('fraction.json', JSON.stringify(data), (err) => {
          if (err) throw err;
          console.log('Power berhasil ditambahkan', contact);
          rl.close();
        });
      });
    });
  });
});
