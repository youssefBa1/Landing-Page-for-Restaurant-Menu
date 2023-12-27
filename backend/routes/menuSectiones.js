// menuSectionRoutes.js

import express from "express";
import MenuSectionModel from "../models/menuSection.js";
import MenuItemModel from "../models/menuItem.js";

const router = express.Router();

// Add a new menu section
router.post("/menuSection", async (req, res) => {
  try {
    const { name, menuItems } = req.body;

    // Create a new MenuSection instance
    const newMenuSection = new MenuSectionModel({
      name,
      menuItems,
    });

    // Save the new menu section to the database
    const savedMenuSection = await newMenuSection.save();

    res.json(savedMenuSection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Update a menu section
router.put("/menu-section/:id", async (req, res) => {
  try {
    const { name, menuItems } = req.body;
    const { id } = req.params;

    // Find the menu section by ID
    const menuSection = await MenuSectionModel.findById(id);

    if (!menuSection) {
      return res.status(404).json({ message: "Menu section not found" });
    }

    // Update the menu section
    menuSection.name = name;
    menuSection.menuItems = menuItems;

    // Save the updated menu section to the database
    const updatedMenuSection = await menuSection.save();

    res.json(updatedMenuSection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/menuSections", async (req, res) => {
  try {
    const menuSections = await MenuSectionModel.find().populate("menuItems");
    res.json(menuSections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Get all menu sections with associated menu items and their details

export default router;
