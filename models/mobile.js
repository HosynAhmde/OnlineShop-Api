const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
  },
  garanty: {
    type: String,
  },
  picture: {
    type: String,
  },
  color: {
    type: String,
    enum: {
      values: ["black", "blue", "red", "white", "yellow"],
      message: "{value} is not suported",
    },
  },
  weight: {
    type: String,
  },
  chipType: {
    type: String,
  },
  gpu: {
    type: String,
  },
  operatingSystem: {
    type: String,
  },
  communicationNetworks: {
    type: String,
  },
  size: {
    type: String,
  },
  backCamera: {
    type: String,
  },
  selfiCamera: {
    type: String,
  },
  batterySpecification: {
    type: String,
  },
  resolution: {
    type: String,
  },
  ram: {
    type: String,
  },
  internalMemory: {
    type: String,
  },
  numberOfSimCards: {
    type: String,
  },
  availabilityInStock: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  specialFeatures: {
    type: String,
  },
  expertReview: {
    type: String,
  },
});

module.exports = mongoose.model("Mobile", mobileSchema);
