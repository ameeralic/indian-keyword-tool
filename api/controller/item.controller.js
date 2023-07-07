const itemService = require('../service/item.service');
const logger = require('../logger/api.logger');

class ItemController {

    async getItems() {
        logger.info('Controller: getItems')
        return await itemService.getItems();
    }

    async createItem(item) {
        logger.info('Controller: createItem', item);
        return await itemService.createItem(item);
    }

    async updateItem(item) {
        logger.info('Controller: updateItem', item);
        return await itemService.updateItem(item);
    }

    async deleteItem(itemId) {
        logger.info('Controller: deleteItem', itemId);
        return await itemService.deleteItem(itemId);
    }
}
module.exports = new ItemController();