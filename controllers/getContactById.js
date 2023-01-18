const { Contact } = require("../models/contacts");
const { createError } = require("../helpers");

const getContactById = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await Contact.findById(contactId);
        if (!result) {
            throw createError(404, "Not Found");
        }
        res.json(result);
    } catch (e) {
        next(e);
    }
}


    
module.exports = getContactById;