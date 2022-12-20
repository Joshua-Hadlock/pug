const express = require('express');
const path = require('path');

const app = express();

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

app.listen(3000, () => {
    console.log('listening on port 3000')
})