const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  email: { type: String, required: true },
  classSection: { type: String, required: true },
  category: { type: String, required: true },
  grNumber: { type: String, required: true },
  caste: { type: String, required: true },
  religion: { type: String, required: true },
  admissionDate: { type: Date, required: true },
  bloodGroup: { type: String, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: true },
  streetAddress: { type: String, required: true },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
