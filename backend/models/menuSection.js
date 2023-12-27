import mongoose from "mongoose";
import MenuItemModel from "./menuItem.js";

const menuSectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItemModel" }],
});

const MenuSectionModel = mongoose.model("MenuSectionModel", menuSectionSchema);

export default MenuSectionModel;
