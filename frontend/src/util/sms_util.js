// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

// DANGER! This is insecure. See http://twil.io/secure

const accountSid = require('../../../config/keys').accountSid;
const authToken = require('../../../config/keys').authToken;
const client = require('twilio')(accountSid, authToken);

// 
client.messages
    .create({
        body: 'TESTING Twilio API from Jesse, if you received this slack me! - Schoolforce remninder to bring your own food to the school dinner',
        from: '+14156530533', //this is the Schoolforce Twilio trial number
        to: '+16506199857' //this is Jesse's number
    })
    // .then(message => console.log(message.sid));

// export const sendSMSOneRecipient = (senderNumber, recipientNumber, reminder) => {
//     client.messages 
//         .creeate ({
//             body: reminder.body, 
//             from: `+1 + ${senderNumber}`,
//             to: `+1 + ${recipientNumber}`
//         })
// };

// export const sendSMSManyRecipient = (senderNumber, recipientsArr, reminder) => {
//     client.messages
//         .create({
//             body: reminder.body,
//             from: `+1 + ${senderNumber}`,
//             to: NOT SURE YET
//         })
// };
