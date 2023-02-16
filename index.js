const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api", require("./Routes/route"))
app.set(require("dotenv").config())
mongoose.set("strictQuery", true)
const PORT = 3000 || process.env.PORT
DB_link = process.env.DB_link
mongoose
  .connect(`${DB_link}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection Successful")
  })
  .catch((err) => {
    if (err) {
      console.log("Connection Unsuccessful")
    }
  })

app.listen(3000, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
