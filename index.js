const Stream = require('./node-rtsp-stream');
//const Stream1 = require('./node-rtsp-stream');
//const streamUrl = 'rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa';
//const streamUrl1 = 'rtsp://mitesh:ils@5533@103.9.13.148:554/cam/realmonitor?channel=3&subtype=0';
const port = process.env.PORT;
const url = process.env.URL;

console.log(port);
console.log(url);

stream = new Stream({
  name: 'foscam_stream',
  streamUrl: url,
  wsPort: port
});



