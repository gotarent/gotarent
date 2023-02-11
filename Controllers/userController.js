const userOtp = require("../Model/userOTPverification")

const verifyOtp = async (req, res) => {
  try {
    const { userId, otp } = req.body
    if (!userId || !otp) {
      return res
        .status(400)
        .json({ status: 404, message: "Error Some Missing Fields" })
    }
    const newid = userId.toString()
    const verify = await userOtp.findById({ _id: newid })
    const userotp = verify.otp
    const expires = verify.expires
    if (expires < Date.now()) {
      const deleteResult = await userOtp.findByIdAndDelete({ _id: newid })
      throw new Error("Code is Expired")
    }
    console.log(verify.otp)
    res.json(verify)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  verifyOtp,
}
