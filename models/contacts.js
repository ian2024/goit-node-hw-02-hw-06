const { Schema, model } = require("mongoose");
const { addSchema } = require("../../schemas/contacts");
const { updateStatusContact } = require("../../schemas/updateContacts");

const contactSchema = Schema({
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
})

const schemas = {
  addSchema,
  updateStatusContact,
};
const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
