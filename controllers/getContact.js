const { Contact } = require("../../models/contacts");

const getContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = getContact;