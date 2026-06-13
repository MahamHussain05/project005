const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb+srv://Maham005:12345@cluster0.t8nktr6.mongodb.net/");
app.get("/users", async (req, res) => {  const users = await User.find();
     res.json(users);
    });
app.listen(5000, () => console.log("Server running"));
