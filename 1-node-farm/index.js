const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

const textOut = `This is what we know about the avocado: ${textIn}.\nCreate on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut, 'utf-8');
console.log('File written successfully!');