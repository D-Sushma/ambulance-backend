const router = require("express").Router();

const {
  user,
  regPatient,
  getAllPatient,
  getSinglePatient,
  createPrescription,
} = require("../controller/controller");

router.post("/rrr", user);
router.post("/regpatient", regPatient);
router.get("/getpatient", getAllPatient);
router.post("/getsinglepatient", getSinglePatient);
router.post("/createprescription", createPrescription);

module.exports = router;
