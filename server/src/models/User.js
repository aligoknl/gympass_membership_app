import mongoose from "mongoose";
import { PASSWORD_REGEX, EMAIL_REGEX } from "../util/constants.js";
import validateAllowedFields from "../util/validateAllowedFields.js";

const userSchema = new mongoose.Schema(
  {
    // The name should be unique, the length should be a minimum of 5 characters,
    // and a maximum of 15 characters, and does not contain special characters or white spaces
    name: {
      type: String,
      required: [true, "Name is required"],
      min: [5, "Username must be at least 5 characters"],
      max: [25, "Username must be at most 15 characters"],
    },

    // The email should be in the form of example@organization.org
    email: {
      type: String,
      required: [true, "Email Address is required"],
      immutable: true,
      unique: true,
      validate: {
        validator: (v) => {
          return EMAIL_REGEX.test(v);
        },
        message: "Invalid email address",
      },
    },
    // The phone number should only contain digits, and should have an extact length of 10 digits
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [true, "Password should be at least 8 characters"],
      validate: {
        validator: (v) => {
          return PASSWORD_REGEX.test(v);
        },
        message: "Password is too weak",
      },
    },

    // The user type is an enum with certain discrete values allowed
    userType: {
      type: String,
      enum: {
        values: ["admin", "member", "non-member"],
        message: "{VALUE} is not supported",
      },
      required: [true, "User type is required!"],
    },
    membership: {
      status: {
        type: String,
        enum: {
          values: ["active", "canceled"],
          message: "{VALUE} is not supported",
        },
        default: "active",
      },
      credit: { type: Number, default: 0 },
      currentCredit: { type: Number, default: 0 },
      membershipDate: { type: Date, default: null },
      membershipEndDate: { type: Date, default: null },
      invoice: [
        {
          date: { type: Date, default: new Date() },
          status: { type: String, default: "outstanding" },
          description: { type: String, default: "No activity" },
          amount: { type: Number, default: 0 },
        },
      ],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export const validateUser = (userObject) => {
  const errorList = [];
  const allowedKeys = ["name", "email", "password", "userType"];

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (userObject.name == null) {
    errorList.push("Name is a required field");
  }

  if (userObject.email == null) {
    errorList.push("Email is a required field");
  }

  if (userObject.password == null) {
    errorList.push("Password is a required field");
  }
  if (userObject.userType == null) {
    errorList.push("userType is a required field");
  }
  return errorList;
};

export default User;
