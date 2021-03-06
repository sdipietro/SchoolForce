var config = {};

// mongoDB
config.mongoURI = process.env.MONGO_URI;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
config.secretOrKey = process.env.SECRET_OR_KEY;

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
// 
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.
config.accountSid = process.env.ACCOUNTSID;
config.authToken = process.env.AUTHTOKEN;
config.verifySid = process.env.VERIFYSID;

// A Twilio number you control - choose one from:
// https://www.twilio.com/user/account/phone-numbers/incoming
// Specify in E.164 format, e.g. "+16519998877"
config.twilioNumber = process.env.TWILIO_NUMBER;

// Export configuration object
module.exports = config;

