var fs = require('fs');
var Stream = require('stream').Stream;
var libdtrace = require('libdtrace');
var dtp = new libdtrace.Consumer();

exports.traces = function (dfile, interval) {

   var stream = new Stream();
       stream.readable = true;

   var prog = fs.readFileSync(dfile,'utf8');
       dtp.strcompile(prog);
       dtp.go();

   setInterval(function () {
  	dtp.consume(function (probe, rec) {
  	   if (rec){
              stream.emit('data', rec.data.toString());
    	   }
	});

        dtp.aggwalk(function (id, key, val) {
           var data = {};
	   data.id = id;
           data.key = key;
           data.val = val;
	   stream.emit('data', JSON.stringify(data));
        });

   }, interval);

   stream.end = function (data) {
      if(data)
         stream.write(data);
         stream.emit('end');
      }

   stream.destroy = function () {
       stream.emit('close');
   }
  
//Pause might be required but need to look at DTRACE buffer
  return stream;    
}
