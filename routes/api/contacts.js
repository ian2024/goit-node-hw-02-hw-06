const express = require("express");
const router = express.Router();
const { schemas } = require("../../models/contacts");
const getContactById = require("../../controllers/getContactById");
const getContact = require("../../controllers/getContact");
const Contact = require("../../models/contacts");
const { createError } = require("../../helpers");
const { isValidId } = require("../../middlewares");



router.get("/", isValidId, getContact);

router.get("/:contactId", isValidId, getContactById);

router.post("/", async (req, res, next) => {
  try {
    const { error } = schemas.contactsSchema.validate(req.body);
    if (error) {
      throw createError(422, error.message);
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
})

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw createError(404, "Not Found");
    }
    res.json({
      message: "removed contact",
    });
  } catch (e) {
    next(e);
  }
})

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = schemas.contactsSchema.validate(req.body);
    if (error) {
      throw createError(422, error.message);
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(req.body, contactId, {new: true});
    if (!result) {
      throw createError(404, "Not Found");
    }
    res.json(result);
  } catch (e) {
    next(e);
  }
})

router.patch("/:contactId/favorite", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { error } = schemas.updateStatusContact.validate(req.body);
    if (error) {
      throw createError(400, console.log({ "message": "missing field favorite" }));
    }
    const result = await Contact.findByIdAndUpdate(req.body, contactId, { new: true });
    if (!result) {
      throw createError(404, "Not Found");
    }
    res.json(result);
  } catch (e) {
    next(e);
  }
});

module.exports = router
