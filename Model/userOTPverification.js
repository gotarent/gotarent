const mongoose = require("mongoose")

const otpSchema = mongoose.Schema({
  otp: {
    type: Number,
  },
  createat: {
    type: Date,
  },
  expires: {
    type: Date,
  },
})
const userOtp = mongoose.model("userotp", otpSchema)
module.exports = userOtp
