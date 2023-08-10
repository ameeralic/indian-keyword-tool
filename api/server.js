const { log } = require('console');
const express = require('express');
const axios = require('axios');

const path = require('path');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');

const app = express();
if (process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config('.env')
}

app.use(bodyParser.json());

// app.use(express.json());


console.log('PORT:::', process.env.PORT)

// const itemController = require('./controller/item.controller')
const keywordsController = require('./controller/keywords.controller')

const port = process.env.PORT || 3080;

app.use('/api/auth', authRouter);

app.post('/api/getKeywordIdeas', (req, res) => {
    console.log('keywordSeed:::', req.body.keywords);
    console.log('geo_target_constants:::', req.body.geo_target_constants);
    // res.json(req.body)
    // keywordsController.getAccessToken().then(data => res.json(data))
    keywordsController.getKeywords(req.body.keywords, req.body.geo_target_constants).then(data => res.json(data))
    // res.json('ff')
    // itemController.createItem(req.body.item).then(data => res.json(data));
});

// app.get('/api/items', (req, res) => {
//     itemController.getItems().then(data => res.json(data));
// });

// app.post('/api/item', (req, res) => {
//     console.log('request_body:::', req.body);
//     itemController.createItem(req.body.item).then(data => res.json(data));
// });

// app.put('/api/item', (req, res) => {
//     console.log('request_body:::', req.body);
//     itemController.updateItem(req.body.item).then(data => res.json(data));
// });

// app.delete('/api/item/:id', (req, res) => {
//     itemController.deleteItem(req.params.id).then(data => res.json(data));
// });

app.get('/', (req, res) => {
    console.log(__dirname);
    res.json('server running')
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})