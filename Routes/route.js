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
    // check("phone", "Enter valid number")
    //   .isNumeric()
    //   .exists()
    //   .isLength({ min: 10 }),
    check("password", "Password connot be lesser than 8 characters")
      .exists()
      .isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { name, email, password } = req.body
    const error = validationResult(req)
    if (!error.isEmpty()) {
      const alert = error.array()
      return res.status(400).json({ message: alert })
    }
    const userEmail = await User.findOne({ email: email })
    if (userEmail) {
      await User.findOneAndDelete({ email: email })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const saveUsers = new User({ name, email, password: hashPassword })
    const result = await saveUsers.save()
    if (!result) {
      return res.status(200).json({ message: "Signup UnSuccessful" })
    }
    await sendMail(email, result._id.toString())
    res.status(200).json({
      message: "Signup Successful and Email Send Successfully",
      userId: result._id,
    })
  }
)

route.post("/verify", userController.verifyOtp)

route.post("/login", loginController)

module.exports = route
