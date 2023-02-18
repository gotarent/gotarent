const userOtp = require("../Model/userOTPverification")
const userSchema = require("../Model/UserSchema")

const verifyOtp = async (req, res) => {
  try {
    const { _id, otp } = req.body
    if (!_id || !otp) {
      return res
        .status(204)
        .json({ status: 204, message: "Error Some Missing Fields" })
    }
    const userVerify = await userOtp.findOne({ user_id: _id.toString() })
    if (userVerify.expires < Date.now()) {
      return res.status(202).json({ status: false, message: "OTP Has Expired" })
    }

    if (otp != userVerify.otp)
      return res.status(401).json({ status: 401, message: "OTP not matched" })
    foundUser = await userSchema.findByIdAndUpdate(_id.toString(), {
      verified: true,
    })

    res.json({
      status: 200,
      message: "Vefification Successful",
    })
    const deleteUserOtp = await userOtp.findOneAndDelete(_id)
    console.log(deleteUserOtp)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  verifyOtp,
}
