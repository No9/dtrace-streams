
var dtracestream = require('../index.js')

var stm = dtracestream.traces(__dirname + "/helloworld.d", 1000)
stm.pipe(process.stdout);
