// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

// DANGER! This is insecure. See http://twil.io/secure
const config = require('../../../config/keys')
const client = require('twilio')(config.accountSid, config.authToken);


client.notify.services(notifyServiceSid)
    .notifications.create({
        toBinding: JSON.stringify([
            binding_type: 'sms', address: '** First phone number here **',
            binding_type: 'sms', address: '** Second phone number here **',
            // This also works for iOS, Android, and FB Messenger.
            // You can mix and match binding_type in the toBinding.
        ]),
        body: 'You just sent your first message with the Passthrough API!'
    })
    .then(notification => console.log(notification.sid))
    .catch(error => console.log(error));


// if you just run `node sms_util.js` in the terminal the message below is created and sent:


//-----------------Twilio's JSON response
// {
// "accountSid":"ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//  "apiVersion":"2010-04-01",
//  "body":"This is the ship that made the Kessel Run in fourteen parsecs?",
//  "dateCreated":"2018-09-11T17:29:05.000Z",
//  "dateUpdated":"2018-09-11T17:29:05.000Z",
//  "dateSent":null,"direction":"outbound-api",
//  "errorCode":null,
//  "errorMessage":null,
//  "to":"+15558675310",
//  "from":"+15017122661",
//  "messagingServiceSid":null,"numMedia":"0",
//  "numSegments":"1",
//  "price":null,"priceUnit":"USD",
//  "sid":"SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//  "status":"queued",
//  "uri":"/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json",
//  "subresourceUris":{
// "media": null
//  }
// }​

//creating SINGLE sms
client.messages
    .create({
        body: 'TESTING Twilio API from Jesse, if you received this slack me! - Schoolforce remninder to bring your own food to the school dinner',
        from: config.twilioNumber, //this is the Schoolforce Twilio trial number
        to: '+19175793267' //this is Jesse's number
    })
    

client.validationRequests
    .create({ friendlyName: 'Validation Test', phoneNumber: arrayOfNumbers })
    .then(validation_request => console.log(validation_request.friendlyName));


//cont arrayOfNumbers = [parentNumbers] 
//temp placeholder

//creating BULK sms
arrayOfNumbers.forEach(function(numbers){
    const message = client.messages
    .create({
        body: 'TESTING Twilio API from Jesse, if you received this slack me! - Schoolforce remninder to bring your own food to the school dinner',
        from: config.twilioNumber,
        to: numbers 
  })
    .then(message =>  console.log(message.status))
    .done();
});

// //fetching ONE sms from history
// client.messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
//     .fetch()
//     .then(message => console.log(message.to));


// //fetching ALL sms from history
// client.messages.list({ limit: 20 })
//     .then(messages => messages.forEach(m => console.log(m.sid)));


// //fetching SPECIFIC sms from history
// client.messages
//     .list({
//         dateSent: new Date(Date.UTC(2016, 7, 31, 0, 0, 0)),
//         from: '+15017122661',
//         to: '+15558675310',
//         limit: 20
//     })
//     .then(messages => messages.forEach(m => console.log(m.sid)));


// //fetching SPECIFIC sms within a TIMEFRAME
// client.messages
//     .list({
//         dateSentAfter: new Date(Date.UTC(2019, 0, 1, 0, 0, 0)),
//         dateSentBefore: new Date(Date.UTC(2019, 2, 1, 0, 0, 0)),
//         limit: 20
//     })
//     .then(messages => messages.forEach(m => console.log(m.sid)));


// //deleting sms
// client.messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
//     .remove();



// // export const sendSMSOneRecipient = (senderNumber, recipientNumber, reminder) => {
// //     client.messages 
// //         .create ({
// //             body: reminder.body, 
// //             from: `+1 + ${senderNumber}`,
// //             to: `+1 + ${recipientNumber}`
// //         })
// // };

// // let recipientsArr = ["9144139483", "6506199857"];

// // // there may be a more efficient way to do this using Twilio API somehow:
// // // THIS ISNT DOING ANYTHING YET BUT DOES NOT GENERATE ERROR
// // const sendSMSManyRecipient = (senderNumber, recipientsArr, reminder) => {
// //     for (let i = 0; i < recipientsArr.length; i++) {
// //         client.messages
// //             .create ({
// //                 body: reminder.body,
// //                 from: `+1 + ${senderNumber}`,
// //                 to: `+1 + ${recipientsArr[i]}`
// //             })
// //     }
// // }

// // //THIS IS NOT GENERATING ANYTHING YET
// // sendSMSManyRecipient("4156530533", recipientsArr, {body: "if you received this, multi-recipient SMS works"});


// // // IMPROVEMENT:
// // // receiving SMS responses guide:
// // // https://www.twilio.com/docs/sms/quickstart/node?code-sample=code-send-an-sms-using-twilio-with-nodejs&code-language=Node.js&code-sdk-version=3.x#where-to-next
