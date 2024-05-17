const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    let VERIFY_TOKEN = 'pusher-bot';
    console.log('Req.query:', req.query);
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
        res.status(200).send(challenge);
    } else {
    res.sendStatus(403);
    }
});

app.listen(5000, () => console.log('Express server is listening on port 3000'));
