const express = require ('express');
const bodyParser = require('body-parser')

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req, res) =>{
  res.json({message: 'hello server!'});
})

app.get('/instructor',(req, res) =>{
    res.json({message: 'hello server you are the best!!!'});
})
  

app.get('/instructor/:firstname',(req, res) =>{

    res.json({message: `hello ${req.params.firstname}`})},
);

app.get('/:id/user',(req, res) =>{
    console.log(req.query)
    res.send('hello world')

    // res.json({message: `hello ${req.params.firstname}`})},
});

app.post('/user',(req , res) => {
    console.log(req.body)
    res.json({message: 'hello fromm stutern again'})

})
  

app.listen(8000,() => {
    console.log("server is running on port 3000")
});