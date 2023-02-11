const NodeMailer = require("nodemailer")
const getOtp = require("otp-generator")
const userOtp = require("../Model/userOTPverification")
const sendMail = async (email) => {
  try {
    const transporter = await NodeMailer.createTransport({
      service: "Gmail",
      host: process.env.HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    })
    const otp = getOtp.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    })
    const info = await transporter.sendMail({
      from: '"GotArent"',
      to: `${email}`,
      subject: "Verify Email",
      text: "Email Verification",
      html: `<h1>${otp}</h1>`,
    })
    const verification = new userOtp({
      otp: otp,
      createat: Date.now(),
      expires: Date.now() + 3600000, // 1 hours
    })
    const result = await verification.save()
    console.log(result)
    return info
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendMail
