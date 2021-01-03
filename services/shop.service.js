const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.getAll = shop => {
    return Shop.find({shop});
}

module.exports.getById = shop => {
    return Shop.findById(shop);
}

module.exports.updateById = shop => {
    const id = shop.params.id;
    const update = shop.body;
    const option = {new: true};
    return Shop.findByIdAndUpdate(id, update, option);
}

module.exports.deleteById = shop => {
    return Shop.findByIdAndDelete(shop);
}
