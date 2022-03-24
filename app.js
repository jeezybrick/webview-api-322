const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.json({msg: 'This is CORS-enabled for an allowed domain.GET'})
})

app.post('/test', (req, res) => {
    console.log(req);
    console.log(res);
    res.json({msg: 'This is CORS-enabled for an allowed domain. POST'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
