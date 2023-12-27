import mongoose from "mongoose";
import express from "express";
import menuRoutes from "./routes/menu.js";
import menuSectionesRoutes from "./routes/menuSectiones.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
mongoose.set("debug", true);
mongoose.connect("mongodb://127.0.0.1:27017/menu");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.use("/", menuRoutes);
app.use("/", menuSectionesRoutes);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
