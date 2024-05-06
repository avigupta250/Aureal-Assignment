const Animal = require("../models/Animal");

const updateAnimalByName = async (req, res) => {
  try {
    const { name, newName, newAbout } = req.body;

    if (!name || (!newName && !newAbout)) {
      return res.status(400).json({
        message: "please provide the details",
      });
    }

   
    const animal = await Animal.findOne({ name });
    if (!animal) {
      return res.status(404).json({
        message: "Animal not found",
      });
    }

  
    if (newName) {
      animal.name = newName;
    }
    if (newAbout) {
      animal.about = newAbout;
    }
    await animal.save();

    res.status(200).json({
      success: true,
      message: "Animal updated successfully",
      animal: animal,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update animal",
      error: error.message,
    });
  }
};

module.exports = updateAnimalByName;
