const fs = require('fs');


// Create a directory asynchronously
fs.mkdir('data', { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created successfully!');
});

fs.writeFile('data/test.txt', 'Hello, Node.js!', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('File written successfully!');
  });

  fs.readFile('data/test.txt', 'utf-8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log('File content:', data);
  });