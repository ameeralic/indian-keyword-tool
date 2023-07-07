const { connect, disconnect } = require('../config/db.config');
const { Item } = require('../model/item.model');
const logger = require('../logger/api.logger');

class ItemRepository {

    constructor() {
        connect();
    }

    async getItems() {
        const items = await Item.find({});
        console.log('items:::', items);
        return items;
    }

    async createItem(item) {
        let data = {};
        try {
            data = await Item.create(item);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateItem(item) {
        let data = {};
        try {
            data = await Item.updateOne(item);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteItem(itemId) {
        let data = {};
        try {
            data = await Item.deleteOne({ _id: itemId });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new ItemRepository();