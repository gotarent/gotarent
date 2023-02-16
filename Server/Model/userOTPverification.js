const mongoose = require("mongoose")

const otpSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
  },
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
