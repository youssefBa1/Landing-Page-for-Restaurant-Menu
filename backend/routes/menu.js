// menuRoutes.js

import express from "express";
import MenuItemModel from "../models/menuItem.js";
import MenuSectionModel from "../models/menuSection.js";

const router = express.Router();

// Get all menu items
router.get("/menu", async (req, res) => {
  try {
    const menuItems = await MenuItemModel.find();
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new menu item
router.post("/menu", async (req, res) => {
  try {
    const { dishName, price, imageUrl } = req.body;

    // Create a new MenuItem instance
    const newMenuItem = new MenuItemModel({
      dishName,
      price,
      imageUrl,
    });

    // Save the new menu item to the database
    const savedMenuItem = await newMenuItem.save();

    // Update the corresponding MenuSection with the new menu item's ID

    res.json(savedMenuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Add many menu items
router.post("/menu/addmany", async (req, res) => {
  try {
    const menuItems = req.body; // Assuming an array of menu items is sent in the request body
    const result = await MenuItemModel.insertMany(menuItems);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/menu-sections", async (req, res) => {
  try {
    const menuSections = await MenuSectionModel.find().populate("menuItems");
    console.log(menuSections);
    res.json(menuSections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
