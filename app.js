// create an express app
const express = require("express")
const app = express()

// use the express static as middleware
app.use(express.static("./"))

// start the server listening for request
app.listen(process.env.PORT || 9000,
    () => console.log("Service is running..."));
