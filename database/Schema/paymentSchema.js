const mongoose = require("mongoose");

// Define the Payment schema
const paymentSchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: [true, "Material name is required"],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity must be a positive number"],
  },
  measurement: {
    type: String,
    required: [true, "Measurement unit is required"],
    trim: true,
  },
  paidAmount: {
    type: Number,
    required: [true, "Paid amount is required"],
    min: [0, "Paid amount must be a positive number"],
  },
  paymentType: {
    type: String,
    enum: {
      values: ["Cash", "Transfer", "Check"],
      message: "Payment type must be either Cash, Transfer, or Check",
    },
    required: [true, "Payment type is required"],
  },
  paymentDate: {
    type: Date,
    required: [true, "Payment date is required"],
  },
  paymentReason: {
    type: String,
    required: [true, "Payment reason is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
