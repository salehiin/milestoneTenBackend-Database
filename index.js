const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());


// Optional except basic set up - below

const users = [
    {id:1, name: 'Sabana', email: 'sabana@gmail.com'},
    {id:2, name: 'Sabnoor', email: 'sabnoor@gmail.com'},
    {id:3, name: 'Sabila', email: 'sabila@gmail.com'},
    {id:4, name: 'Sohana', email: 'sohana@gmail.com'},

    app.get('/users', (req, res) => {
        res.send(users);
    })
]

// Optional except basic set up - above



app.get('/', (req, res) => {
    res.send('Users Management Server Running')
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})