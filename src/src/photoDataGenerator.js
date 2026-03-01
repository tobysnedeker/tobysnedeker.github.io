import fs from 'fs'

const photoDir = '../public/photos';
const outputFile = './photoData.js';
const files = fs.readdirSync(photoDir);

let images = [];
let count = 1;

if (files.length != 0) {
  files.forEach(file => {
    images.push({src: file, alt: `Image ${count}`});
    count++;
  });
};

const data = `export const images = ${JSON.stringify(images)}`;

fs.writeFileSync(outputFile, data);