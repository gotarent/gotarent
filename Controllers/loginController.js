const User = require("../Model/UserSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password)
      return res.status(204).json({ status: 204, message: "Enter All Fields" })
    const response = await User.findOne({ email: email })
    if (!response) {
      return res
        .status(204)
        .json({ status: 204, message: "Invalid Credentials" })
    }
    if (response.verified === false)
      return res
        .status(401)
        .json({ status: 401, message: "Please Verify Your Mail" })
    const unHashedPass = await bcrypt.compare(password, response.password)
    if (unHashedPass === false)
      return res
        .status(401)
        .json({ status: 401, message: "Invalid Credentials" })
    const id = response._id.toString()
    const token = jwt.sign(id, `${process.env.SECRET_KEY}`)
    res.status(200).json({
      status: 200,
      message: "Login Successfully",
      token: token,
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    })
  }
}

module.exports = loginController
