
var dtracestream = require('../index.js')

var stm = dtracestream.traces(__dirname + "/processcount.d", 1000)
stm.pipe(process.stdout);
