const fs = require('fs');
const chunksize = 200000;

const readStream = fs.createReadStream('large_file.txt', { highWaterMark: chunksize });

readStream.on('data', (chunk) => {
    // Process the chunk
    console.log(chunk.toString());
});

readStream.on('end', () => {
    console.log('Finished reading the file');
});
