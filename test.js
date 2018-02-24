var addition = require('./App.js');

addition.add(100,200,(err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})