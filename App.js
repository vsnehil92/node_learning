const  spawn  = require('child_process').spawn;
const scriptExecution = spawn("python", ["./App.py"]);


var dataString;
scriptExecution.stdout.on('data', (data) => {
    dataString += data.toString();
    dataString = dataString.replace( "undefined", "" );
    console.log(dataString);
});


var data = JSON.stringify([100,200]);
scriptExecution.stdin.write(data);
// console.log(data);
scriptExecution.stdin.end();