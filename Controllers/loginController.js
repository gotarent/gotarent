const User = require("../Model/UserSchema")
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(204).json({ status: 204, message: "Enter All Fields" })
    const response = await User.findOne({ email: email })
    if (!response) {
      res.status(404).json({ status: 404, message: "Invalid Credentials" })
    }
  } catch (error) {
    res.status(502).json({ status: 500, message: "Internal Server Error" })
  }
}

module.exports = loginController
