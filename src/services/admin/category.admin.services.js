const Category = require('../../model/category.model');

exports.getAllCategory = async function (page) {
    try {
        let result = await Category.findAll({
            limit : 10,
            offside : (page - 1) * 10
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createCategory = async function (category) {
    try {
        let result = await Category.create(category);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}