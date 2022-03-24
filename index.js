const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/test', (req, res) => {
    console.log(req);
    res.json({msg: 'This is CORS-enabled for an allowed domain. POST'})
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})
