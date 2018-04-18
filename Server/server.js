const express = require('express'); //translated: go to the node module folder, find express and run the code

const app = express(); //the thing that was exported from express above, now run it
const PORT = 5000; //all caps cause it won't change

// app.get('/', (req, res) => {
//     res.send('Hello World');   //req stands for request, res stands for response
// });   //when someone goes to localhost: 5000 this is what we want to happen

app.use(express.static('server/public')); //express.static() is a method, express looks to what files we want it to run, in this case it's the public folder


app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
}); //PORT is which entry way, can be any number between 1 and 9999, it's mostly arbitrary, occasionally it will be horrific

//if you move this  file into a folder, you have to type node fileName/server.js so that terminal knows where to find it