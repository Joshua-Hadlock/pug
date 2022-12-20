const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 3000;
users = [
    {
    username: 'Bob the man',
    email: "BobtheMan@gmail.com",
    age: 34
    },{
        username: 'Fred',
        email: "Fred@gmail.com",
        age: 41
        },{
            username: 'Sally',
            email: "Sally@gmail.com",
            age: 32
            },{
                username: 'Mr. Pug',
                email: "Mr.pug@PUG.com",
                age: 12
                },
]



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    const date = new Date()
    res.render('index', {
        user: users,
        time: date
    });
})

app.get('/pug2', (req, res) => {
    res.render('giantPUG')
})

app.get('/users/:userName', (req, res) => {
    res.end('You clicked on ' + req.params.userName)
})


app.listen(port, () => {
    console.log('listening on port ' + port)
})