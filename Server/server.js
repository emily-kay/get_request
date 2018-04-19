//Always necessary consts

const express = require('express'); //translated: go to the node module folder, find express and run the code
const bodyParser = require('body-parser');
const app = express(); //the thing that was exported from express above, now run it
const PORT = 5000; //all caps cause it won't change

//Created consts

const quotes_data = require('./modules/all-quotes.js');
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//Make the server do stuff

app.get('/', (req, res) => {
    console.log('It worked!');//console.logs show up only on the terminal side, not on the DOM/client-side/website
    res.send('Happy weekend!');   //req stands for request, res stands for response
});   //when someone goes to localhost: 5000 this is what we want to happen


app.get('/quote', (req,res) => {
    const randomNumber = Math.floor(Math.random()*quotes_data.length);
    res.send(quotes_data[randomNumber]);
});

app.use(express.static('server/public')); //express.static() is a method, express looks to what files we want it to run, in this case it's the public folder

app.get('/all-quotes', (req, res) =>{
    res.send(quotes_data);
})

app.post('/add-quote', (req, res) =>{
    console.log(req.body); //whatever we send back as data in our post is req.body on the server*********
    quotes_data.push(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
}); //PORT is which entry way, can be any number between 1 and 9999, it's mostly arbitrary, occasionally it will be horrific



//                             Notes
//if you move this  file into a folder, you have to type node fileName/server.js so that terminal knows where to find it
///NOTE! You can not send numbers ex: (400). Historically they've been errors so you have to put it in a string. Also cannot put two res.sends. 
//You can make changes to the client-side stuff (html, css, etc) without having to kill the server. You only have to reset it if you make changes to the server