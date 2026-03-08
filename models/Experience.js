const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    employmentType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: Date,
    currentlyWorking: {
      type: Boolean,
      default: false,
    },
    description: String,
    skills: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', experienceSchema);
