var request = require('request');
const fs = require('fs');

console.log('Downloading image...');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
.on('error', function (err) {                                   // Note 2
 throw err; 
})
.on('response', function (response) {   // Note 3
  console.log("Downloaded.");
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Status Message: ', response.statusMessage);
  console.log('Response Content Type: ', response.headers['content-type']);
})
.pipe(fs.createWriteStream('./future.jpg'));