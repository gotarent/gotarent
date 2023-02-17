const NodeMailer = require("nodemailer")
const getOtp = require("otp-generator")
const userOtp = require("../Model/userOTPverification")
const sendMail = async (email, userid) => {
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
    const otp = getOtp.generate(4, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    })
    const info = await transporter.sendMail({
      from: '"GotArent"',
      to: `${email}`,
      subject: "Verify Email",
      text: "Email Verification",
      html: `<h1>Your Verification Code is ${otp}</h1>`,
    })
    const verification = new userOtp({
      user_id: userid,
      otp: otp,
      createat: Date.now(),
      expires: Date.now() + 300000, // 5 Minutes
    })
    await verification.save()
    return info
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendMail
