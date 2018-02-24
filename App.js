var PythonShell = require('python-shell');

var options = {
    mode: 'text',
    args: [100, 200]
};

PythonShell.run('./App.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log(parseInt(results));
});
