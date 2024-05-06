const Animal = require("../models/Animal");

const getAllAnimals = async (req, res) => {
  try {
    
    const animals = await Animal.find();

    res.status(200).json({
      success: true,
      message: "Animals fetched successfully",
      animals: animals,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch animals",
      error: error.message,
    });
  }
};

module.exports = getAllAnimals;
