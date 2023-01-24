const sgMail = require("@sendgrid/mail");
require('dotenv').config();

const { SENGRID_API_KEY, EMAIL } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const sendMail = async (data) => {
    const mail = { ...data, from: EMAIL };
    
    sgMail
        .sendMail(mail)
        .then(() => console.log('Mail sent successfully'))
        .catch((e) => console.log(e.message))
}

module.exports = sendMail