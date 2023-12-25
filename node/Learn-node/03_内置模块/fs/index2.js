const fs = require('fs');

const img = fs.readFileSync('./年末促销季.png');

// console.log(img);

fs.writeFileSync('./pic/img.png', img);