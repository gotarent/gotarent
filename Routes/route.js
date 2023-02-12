const express = require("express")
const route = express.Router()
const User = require("../Model/UserSchema")
const { check, validationResult } = require("express-validator")
const sendMail = require("../Utils/sendMail")
const bcrypt = require("bcryptjs")
const userController = require("../Controllers/userController")
const loginController = require("../Controllers/loginController")

route.get("/users", async (req, res) => {
  const users = await User.find()
  res.json({ users })
})

route.post(
  "/signup",

  [
    check("name", "Name cannot be empty").exists().isLength({ min: 5 }),
    check("email", "Enter valid email").isEmail().normalizeEmail(),
    check("phone", "Enter valid number")
      .isNumeric()
      .exists()
      .isLength({ max: 10 }),
    check("password", "Enter valid password").exists().isLength({ min: 8 }),
  ],
  async (req, res) => {
    const { name, email, phone, password } = req.body
    const error = validationResult(req)
    if (!error.isEmpty()) {
      const alert = error.array()
      return res.status(404).json({ alert })
    }
    const userEmail = await User.findOne({ email: email })
    if (userEmail) {
      return res
        .status(404)
        .json({ status: 404, message: "Email Already Exists" })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const saveUsers = new User({ name, email, phone, password: hashPassword })
    const result = await saveUsers.save()
    if (!result) {
      return res.status(200).json({ message: "Signup UnSuccessful" })
    }
    await sendMail(email, result._id.toString())
    res
      .status(200)
      .json({
        message: "Signup Successful and Email Send Successfully",
        userId: result._id,
      })
  }
)

route.post("/verify", userController.verifyOtp)

route.post("/login", loginController)

module.exports = route
