const Patient = require("../model/patient");
const Prescription = require("../model/prescription");

const user = (req, res) => {
  try {
    res.send("Wel come my new api---");
    // res.status(200).json({ message:"success"})
  } catch (error) {
    console.log("server error: " + error);
  }
};

const regPatient = async (req, res) => {
  try {
    const { name, age, contact, medicalHistory, address, gender } = req.body;

    // console.log("req--", req.body);

    if (!name || !age || !contact || !address || !gender) {
      res.status(401).json({ message: "fill all required field" });
    }

    let patient = new Patient({
      name,
      age,
      contact,
      medicalHistory,
      address,
      gender,
    });

    // console.log("patient", patient);

    // if (!patient) {
    //   res.status(401).json({ message: "something went wrong" });
    // }

    await patient.save();

    // const p = await patient.save();

    // console.log("p", p);

    res
      .status(200)
      .json({ data: patient, message: "successfully added patient" });
  } catch (error) {
    // console.log("not registered server error");
    res.status(501).json({ message: " server side  error" });
  }
};

const getAllPatient = async (req, res) => {
  try {
    let patientDataList = await Patient.find();

    res.status(200).json({ data: patientDataList, message: "success" });
  } catch (error) {
    res.status(501).json({ message: " server side  error" });
  }
};
const getSinglePatient = async (req, res) => {
  try {
    const { name } = req.body;

    let patientDataList = await Patient.find({ name: name.toLowerCase() });

    res.status(200).json({ data: patientDataList, success: true });
  } catch (error) {
    res.status(501).json({ message: " server side  error" });
  }
};
// --
const createPrescription = async (req, res) => {
  try {
    const { patientID, date, medicines, note } = req.body;

    // console.log("req--", req.body);
    if (!patientID) {
      res.status(401).json({ message: "patientID required field" });
    }

    if (!medicines || !note) {
      res.status(401).json({ message: "fill all required field" });
    }
    console.log("hvhdvhvdm");

    let prescription = new Prescription({
      patientID,
      medicines,
      note,
    });

    await prescription.save();

    res
      .status(200)
      .json({ data: prescription, message: "successfully added prescription" });
  } catch (error) {
    // console.log("not registered server error");
    res.status(501).json({ message: " server side prescription error" });
  }
};

module.exports = {
  user,
  regPatient,
  getAllPatient,
  getSinglePatient,
  createPrescription,
};
