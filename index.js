const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const port = 3000;

app.use(cors());
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/test', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.json({msg: 'This is CORS-enabled for an allowed domain. POST'})
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})
