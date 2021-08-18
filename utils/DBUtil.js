const mongoose = require('mongoose');
const constant = require('../constants');



const formateResponse = (data) => {
    if (Array.isArray(data)) {
        let dataList = [];
        for (value of data) {
            dataList.push(value.toObject());
        }
        return dataList;
    }
    return data.toObject();
}

const validateObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constant.responseMessage.INVALID_ID);
    }
}

module.exports = {
    formateResponse,
    validateObjectId,
}