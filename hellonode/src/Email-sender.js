var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'email',
  to: 'password',
  subject: 'Sending Email using Node.js',
  text: 'ghir kantester '
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});