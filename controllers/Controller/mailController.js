const nodemailer = require("nodemailer");
const Helper = require("../helper");
/**
|--------------------------------------------------
| PROPERTIES
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| METHODS
|--------------------------------------------------
*/
exports.send = async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "dev.turboracegear@gmail.com",
      pass: "Turbo@1234",
    },
  });
  var mailOptions = {
    from: "dev.turboracegear@gmail.com",
    to: `${req.body.to}`,
    subject: "Sending Email using Node.js",
    html: `${req.body.mail}`,
  };
  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      console.log(error);
      Helper.Response(res, 200, "error",error );
    } else {
      
      console.log("Email sent: " + info.response);
      Helper.Response(res, 200, "success",info );
    }
  });
};
