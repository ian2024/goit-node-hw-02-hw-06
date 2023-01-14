const Joi = require("joi");

const updateStatusContact = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { updateStatusContact };