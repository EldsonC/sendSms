// import twilio from "twilio";
const twilio = require("twilio");

const SMS_CONFIG = {
    accountSid: 'ACa41e45fffdfaf600ec4a755d38956c52',
    authToken: 'b7898bf7b2bef4032d8489634967cad2',
    twilioPhoneNumber: '+12167852675',
}

const client = twilio(SMS_CONFIG.accountSid, SMS_CONFIG.authToken);

const clients = [
    {
        phone: "+5585991687867"
    },
    {
        phone: "+5544999814053"
    },
    {
        phone: "+5585998181005"
    },
]

const sendSms = (message, numeroClient) => {
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
            console.log(err)
        })
}

// sendSms("Teste send", "+5544999814053");

clients.map((data) => {
    sendSms("Fala ai luquinha!", data.phone);
})




