require('dotenv').config();
const   express = require('express'),
        bodyParser = require('body-parser'),
        massive = require('massive');

const {
        SERVER_PORT,
        CONNECTION_STRING

} = process.env


const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(bodyParser.json());

app.listen(SERVER_PORT, () => console.log(`Lucky 7's on port: ${SERVER_PORT}`) );