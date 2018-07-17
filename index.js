const fs = require('fs');
const pdf = require('pdf-parse');
const gm = require('gm')

let dataBuffer = fs.readFileSync('./input.ai');

pdf(dataBuffer).then(function(data) {
  for(let i = 0; i < data.numpages; i++){
    gm(`./input.ai[${i}]`)
      .density(200,200)
      .setFormat('jpg')
      .background('white')
      .quality(70)
      .flatten()
      .write(`./full${i}.jpg`, () => {
        console.log("Finished");
      })
    gm(`./input.ai[${i}]`)
      .density(40,40)
      .setFormat('jpg')
      .background('white')
      .quality(70)
      .flatten()
      .write(`./thumb${i}.jpg`, () => {
        console.log("Finished");
      })
  }
});
