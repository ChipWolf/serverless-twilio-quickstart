'use strict';

var twilio = require('twilio')
var client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports.hello = (event, context, callback) => {
  
  client.messages.create({
        body: 'Hello from Node',
        to: '+12345678901',  // Text this number
        from: '+12345678901' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));

  callback(null, null);
};
