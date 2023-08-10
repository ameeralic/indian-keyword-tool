// const itemService = require('../service/item.service');
const axios = require("axios");
const logger = require('../logger/api.logger');
const client_id = process.env.G00GLE_ADS_API_CLIENT_ID
const client_secret = process.env.G00GLE_ADS_API_CLIENT_SECRET
const refresh_token = process.env.G00GLE_ADS_API_REFRESH_TOKEN

class KeywordsController {
    constructor() {
        this.access_token = ''
        // this.getAccessToken()
    }

    async getAccessToken() {
        logger.info('Controller: getAccessToken')
        const generateAcessToken_Header =
        {
            "grant_type": "refresh_token",
            "client_id": client_id,
            "client_secret": client_secret,
            "refresh_token": refresh_token
        }
        // console.log(generateAcessToken_Header);
        // return generateAcessToken_Header
        // const response = await axios.get("https://www.google.com")
        const response = await axios.post("https://www.googleapis.com/oauth2/v3/token", generateAcessToken_Header)
        return response.data.access_token
        // return this.access_token
    }

    async getKeywords(keywords, geo_target_constants) {
        // this.getAccessToken().then((data) => this.access_token = data)
        logger.info('Controller: getKeywords')
        var data =
        {
            "geoTargetConstants": JSON.parse(geo_target_constants),
            "language": "languageConstants/1018",
            "keywordSeed": { "keywords": JSON.parse(keywords) },
            // "pageSize": "10"
        }
        const authHeader =
        {
            "Authorization": "Bearer " + await this.getAccessToken(),
            "developer-token": "", // create a developer token for google, visit https://developers.google.com/google-ads/api/docs/start
            "login-customer-id": "" // your customer id
        }
        const response = await axios.post("https://googleads.googleapis.com/v14/customers/1707866433:generateKeywordIdeas", data, { headers: authHeader })
        // console.log("getKeywords Success: " + response.data.results)
        return response.data.results
        // return await itemService.getItems();
    }

    // async createItem(item) {
    //     logger.info('Controller: createItem', item);
    //     return await itemService.createItem(item);
    // }

    // async updateItem(item) {
    //     logger.info('Controller: updateItem', item);
    //     return await itemService.updateItem(item);
    // }

    // async deleteItem(itemId) {
    //     logger.info('Controller: deleteItem', itemId);
    //     return await itemService.deleteItem(itemId);
    // }
}
module.exports = new KeywordsController();