# node_learning


For using this project clone the repository and then go into the root folder of the project inside the terminal.<br />
Type the command: <br />
```npm install```<br />
this will install all the dependencies. Now type the command:<br />
```npm test```<br />
this will run the test on the script App.js.<br />

## Usage
```var addition = require('./App.js');

addition.add(100,200,(err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})```
