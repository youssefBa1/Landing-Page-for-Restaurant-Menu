import mongoose from "mongoose";

import MenuSectionModel from "./menuSection.js";

const menuItemSchema = new mongoose.Schema({
  dishName: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const MenuItemModel = mongoose.model("MenuItemModel", menuItemSchema);

export default MenuItemModel;
