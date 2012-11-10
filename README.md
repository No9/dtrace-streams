dtrace-streams
==============

Streaming API for DTrace on IllumOS based systems. 

## Install 
```
$ npm install dtrace-streams
```

## Usage 

``` 
var dtracestream = require('dtrace-streams')
var stm = dtracestream.traces(LOCATION_OF_D_FILE, 1000)
stm.pipe(process.stdout);
```

## Examples 

### Install 

```
$ git clone git@github.com:No9/dtrace-streams.git
$ cd dtrace-streams
$ npm install 
$ cd examples 
```

### Run
```
$ node helloworld.js
Hell of a world!
```
