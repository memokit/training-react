const express = require('express');
let app = express();

app.get('/', (req, res) => {
    let package = {
        id: '01',
        sender: 'Indy',
        reciver: 'Luffy'
    }
    res.json(package);
});


app.get('/hello', (req, res) => {
    res.send('Hello Word');
});

app.listen(3000);