const Animal = require("../models/Animal");

const deleteAnimalByName = async (req, res) => {
  try {
    const { name } = req.body;


    if (!name) {
      return res.status(400).json({
        message: "Please provide the name of the animal to delete",
      });
    }

    const animal = await Animal.findOne({ name });
    if (!animal) {
      return res.status(404).json({
        message: "Animal not found",
      });
    }

    
    await Animal.findOneAndDelete({ name });

    res.status(200).json({
      success: true,
      message: "Animal deleted successfully",
      animal: animal,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete animal",
      error: error.message,
    });
  }
};

module.exports = deleteAnimalByName;
