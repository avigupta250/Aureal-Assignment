const Animal = require("../models/Animal");

const createAnimal = async (req, res) => {
  try {
    const { name, about } = req.body;

    if (!name || !about) {
      return res.status(400).json({
        message: "Please provide name and about for the animal",
      });
    }

    const doesExist = await Animal.exists({ name });

    if (doesExist) {
      return res.status(409).json({
        message: "Animal with this name already exists",
      });
    }

    const newAnimal = await Animal.create({
      name,
      about,
    });

    res.status(201).json({
      success: true,
      message: "Animal created successfully",
      animal: newAnimal,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create animal",
      error: error.message,
    });
  }
};

module.exports = createAnimal;
