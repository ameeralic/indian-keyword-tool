const { log } = require('console');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
if (process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config('.env')
}

app.use(bodyParser.json());


console.log('PORT:::', process.env.PORT)

const itemController = require('./controller/item.controller')

const port = process.env.PORT || 3080;

app.get('/api/items', (req, res) => {
    itemController.getItems().then(data => res.json(data));
});

app.post('/api/item', (req, res) => {
    console.log('request_body:::', req.body);
    itemController.createItem(req.body.item).then(data => res.json(data));
});

app.put('/api/item', (req, res) => {
    console.log('request_body:::', req.body);
    itemController.updateItem(req.body.item).then(data => res.json(data));
});

app.delete('/api/item/:id', (req, res) => {
    itemController.deleteItem(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    console.log(__dirname);
    res.json('server running')
    // res.sendFile(path.join(__dirname, '../ui/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})