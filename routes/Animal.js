const express = require("express")

const router = express.Router()

const createAnimal =require("../controllers/createAnimal")
const deleteAnimalByName =require("../controllers/deletAnimal")
const updateAnimalByName=require("../controllers/updateAnimal")
const getAllAnimals=require("../controllers/fetchAnimal")

router.post("/createanimal", createAnimal);
router.delete("/deleteanimal",deleteAnimalByName);
router.put("/updateanimal",updateAnimalByName);
router.get("/allanimals",getAllAnimals);


module.exports = router;