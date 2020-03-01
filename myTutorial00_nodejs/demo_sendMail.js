const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'soniacelis@gmail.com',
        pass: ''
    }
});

const mailOptions = {
    from: 'soniacelis@gmail.com',
    to: 'projects@hokkaidoichi.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});