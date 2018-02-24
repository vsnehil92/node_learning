var PythonShell = require('python-shell');
module.exports = {
    add: function(num1, num2, cb){
        try{
            // console.log("hello")
            var options = {
                mode: 'text',
                args: [num1, num2]
            };

            PythonShell.run('./App.py', options, function (err, results) {
                if (err) throw err;
                // console.log(results)
                return cb(parseInt(results));
            });
        }catch (error) {
            cb(error);
        }    
    }
}