require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const sendSms = (msg) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: msg,
       from: process.env.APPLICATION_PHONE_NUMBER,
       to: process.env.ADMIN_PHONE_NUMBER
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;