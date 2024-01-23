const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'myemail@gmail.com',
      pass: 'password'
    }
  });

 const mailOptions = {
    from: 'myemail@gmail.com',
    to: 'receiver@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy! Siuuuu'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });