var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmailID',
    pass: 'yourgmailID password'
  }
});

var mailOptions = {
  from: ' your gmailID',
  to: 'gmailID where you want to send mail',
  subject: 'Sending Email using Node.js',
  text: 'Sending an email using nodeS'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});