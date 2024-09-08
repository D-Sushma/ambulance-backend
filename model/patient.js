const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: ["true", "Give Male, Female or Other only"],
      },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    medicalHistory: {
      type: String,
    },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now
    //   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
