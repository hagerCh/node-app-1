var express = require('express')
const bodyparser = require('body-parser');
var app = express()

app.use(bodyparser.json());

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
        return "Valid email";
    } else{
        return "Invalid email";
    }
}

function validatePassword(password) {
    var min = /[a-z]/;
    var maj = /[A-Z]/;
    var chiff = /[0-9]/;
    var score=0;

    if (password.length < 8) {
        return "Invalid password";
    }
    else 
    {
        if (min.test(password)) {
            score+=1;
        }
        if (maj.test(password)) {
            score+=1;
        }
        if (chiff.test(password)) {
            score+=1;
        } 
    }
    
    console.log(score);
    if (score==1){
        return "weak password";
    }
    else if (score ==2){
        return "medium password";
    }
    else if (score==3){
        return "strong password";
    }
}

app.post('/', (req, res) => {
    // console.log("Hello from console");
    // res.send('hello world')
    // res.send({message: 'Hello world'}) 
    //res.send({ message: req.body.password + req.body.email })
    res.send({email:validateEmail(req.body.email), password:validatePassword(req.body.password)});
})

app.get('/contact', function (req, res) {
    //res.send('hello world')
    res.send({ message: 'Thanks for contacting us :)' })
})

app.listen(3000) //port