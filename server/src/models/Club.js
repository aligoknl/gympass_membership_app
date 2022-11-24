import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is a required field"],
      minlength: [3, "title must be at least 3 characters"],
      maxlength: [30, "title must be maximum 30 characters"],
    },
    description: {
      type: String,
      required: [true, "description is a required field"],
      minlength: [15, "description must be at least 15 characters"],
      maxlength: [500, "description be maximum 500 characters"],
    },
    credit: { type: Number, default: 1 },
    address: {
      street: { type: String, required: [true, "street is a required field"] },
      house_number: {
        type: String,
        required: [true, "house_number is a required field"],
      },
      postcode: {
        type: String,
        required: [true, "postcode is a required field"],
      },
      city: { type: String, required: [true, "city is a required field"] },
    },
    image: { type: String, required: [true, "image is a required field"] },
    website: { type: String },
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
      required: [true, " admin is a required field"],
      immutable: true,
    },
    member: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  },

  { timestamps: true }
);

const Club = mongoose.model("Club", clubSchema);

export default Club;
