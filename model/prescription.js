// Date
// Medicines (with dosage and instructions)
// Additional Notes
// Include a button to save the prescription.
// View Prescriptions:
// Display a list of all prescriptions for a selected patient.
// For each prescription, display:
// Date
// Medicines
// Notes

const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
  {
    patientID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    medicines: [
      {
        name: {
          type: String,
          required: true,
        },
        dosage: {
          type: String,
          required: true,
        },
      },
    ],
    note: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", prescriptionSchema);
