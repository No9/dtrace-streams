dtrace-streams
==============

Streaming API for DTrace on IllimOS based systems. 

## Install 
```
npm install dtrace-streams
```

## Usage 

See examples folder

```
var dtracestream = require('../index.js')
var stm = dtracestream.traces(LOCATION_OF_D_FILE, 1000)
stm.pipe(process.stdout);
```

