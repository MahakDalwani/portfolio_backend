const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: String,
    technologies: [String],
    githubrepo: String,
    liveLink: String,
    startDate: Date,
    endDate: Date,
    featured: {
      type: Boolean,
      default: false,
    },
    details: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
