const user = require('../../model/user.model');

exports.getAllUser = async function (page) {
    try {
        let result = await user.findAll({
            limit : 10,
            offside : (page - 1) * 10
        });
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createUser = async function (userr) {
    try {
        let result = await user.create(userr);
        return result;
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.updateUser = async function (userRequest) {
    try {
        let result = await user.update(userRequest, {
            where: {
                id : userRequest.id
            }
        })
        if(result[0] == 0){
            throw new Error('User tidak ditemukan/User tidak dapat diupdate')
        }else {
            return {message : "Berhasil mengupdate user"}
        }

    } catch (err) {
        throw new Error(err.message);
    }
}