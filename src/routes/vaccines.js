const express = require("express")
const router = express.Router()
const controller = require("../controllers/vaccineController")

router.post("/", controller.createVaccine)
router.get("/", controller.getAllVaccine)
router.get("/:id", controller.getByIdVaccine)
router.patch("/:id/vaccinated", controller.updateVaccine)
router.delete("/:id", controller.deleteVaccine)

module.exports = router