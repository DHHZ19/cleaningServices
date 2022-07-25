const express = require("express");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const app = express();
const moongoose = require("mongoose");
const { findById } = require("./models/Quoter");
const Quoter = require("./models/Quoter");
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.DB_STRING);

app.get("/", async (req, res) => {
  try {
    const quoters = await Quoter.find({});
    res.render("index", { quoters });
  } catch (error) {
    console.error(error);
  }
});
app.post("/testimonals", async (req, res) => {
  try {
    const quoter = await Quoter.create({
      name: req.body.name,
      testimonal: req.body.testimonal,
    });

    const quoteId = await Quoter.findOne({ name: req.body.name });

    const quoters = await Quoter.find({});
    res.render("index", { quoters, qutoeId: quoteId._id, name: req.body.name });
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

app.delete("/deleteTestimonal", async (req, res) => {
  try {
    const deleted = await Quoter.findOneAndDelete({ name: req.body.name });
    res.status(201).redirect("/");
  } catch (error) {
    console.error(error);
    res.status(501);
  }
});
const PORT = 4000;
app.listen(process.env.PORT || PORT, {}, () => {
  console.log(`connected to ${PORT}`);
});
