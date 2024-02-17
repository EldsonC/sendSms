// import twilio from "twilio";
import { Twilio }  from "twilio";

const SMS_CONFIG = {
    accountSid: 'ACa41e45fffdfaf600ec4a755d38956c52',
    authToken: 'c669ae956c9a3ac0f7ac5039cbd2e2c3',
    twilioPhoneNumber: '+12167852675',
}

const client = new Twilio(SMS_CONFIG.accountSid, SMS_CONFIG.authToken);

const sendSms = (message: string, numeroClient: string) => {
    client.messages
        .create({
            body: message,
            from: SMS_CONFIG.twilioPhoneNumber,
            messagingServiceSid: "MGaec4284ed9cd5bbe33a6b8b831ddd867",
            to: numeroClient
        })
        .then(() => {
            console.log("sms send succefully")
        })
        .catch((err) => {
            console.log(err.message)
        })
}

sendSms("Teste send https://www.powtfy.com/port/EldsonC", "+5544999814053");





