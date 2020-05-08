const Stream = require('./node-rtsp-stream');
const streamUrl = 'rtsp://mitesh:ils@5533@103.9.13.148:554/cam/realmonitor?channel=7&subtype=0';

stream = new Stream({
  name: 'foscam_stream',
  streamUrl: streamUrl,
  wsPort: 4443
});