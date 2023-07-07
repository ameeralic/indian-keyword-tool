const itemRepository = require('../repository/item.repository');

class ItemService {

    constructor() { }

    async getItems() {
        return await itemRepository.getItems();
    }

    async createItem(item) {
        return await itemRepository.createItem(item);
    }

    async updateItem(item) {
        return await itemRepository.updateItem(item);
    }

    async deleteItem(itemId) {
        return await itemRepository.deleteItem(itemId);
    }

}

module.exports = new ItemService();