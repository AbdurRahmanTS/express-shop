const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const shops = await shopService.getAll();
        return res.status(200).json(shops);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const shop = await shopService.getById(id);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.updateById = async (req, res, next) => {
    try {
        const shop = await shopService.updateById(req);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.deleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const shop = await shopService.deleteById(id);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}
