import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 6060;

app.use(express.json());
app.use(cors());

const cardSchema = new mongoose.Schema({
  name: String,
  title: String,
  icon: String,
});

const Card = mongoose.model("Card", cardSchema);

app.get("/", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    res.send(card);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, title, icon } = req.body;
    const newCard = new Card({ name, title, icon });
    await newCard.save();
    res.send(newCard);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findByIdAndDelete(id);
    res.send(card);
  } catch (error) {
    res.send(error.message);
  }
});

mongoose
  .connect("mongodb+srv://arzu:arzu@cluster0.9p2kmwb.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
