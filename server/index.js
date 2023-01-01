const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://dushyant:dushyant123@cluster0.wgockzo.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(authRouter);
mongoose.set("strictQuery", false);
mongoose
.connect(DB)
.then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
});
app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at ${PORT}`);
});