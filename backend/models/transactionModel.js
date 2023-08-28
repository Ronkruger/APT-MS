import mongoose from "mongoose";
import { calculateDueDate } from "../utils/dateUtils.js";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    tenantTransaction: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        tenant: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'tenants',
        },
      },
    ],
    moveIn: {
      type: Date,
      required: true,
    }   ,
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    dueDate: {
      type: Date,
      default: calculateDueDate,
    },
    // Additional Fields
    totalAmount: {
      type: Number,
      required: true,
    },
    // Add more fields as needed
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
