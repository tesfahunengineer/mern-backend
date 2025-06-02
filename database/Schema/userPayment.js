const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    requestedBy: {
      type: String,
      required: true,
      trim: true,
    },
    materialId: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    unitOfMeasure: {
      type: String,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    paidAmount: {
      type: Number,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
      enum: ["Cash", "Bank Transfer", "Cheque"],
    },
    chequeNumber: {
      type: String,
      validate: {
        validator: function (v) {
          if (this.paymentType === "Cheque") {
            return typeof v === "string" && v.trim() !== "";
          }
          return true;
        },
        message: "Cheque number is required when payment type is Cheque",
      },
    },
    remainingBalance: {
      type: Number,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "Approved", "cancelled"],
      default: "pending",
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^\d{10,15}$/.test(v),
        message: "Phone number must be between 10 to 15 digits",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
