import mongoose from "mongoose";

const connectDB = () =>
  mongoose.connect(
    `${process.env.DB_HOST}+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rz51x9a.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
  );

export default connectDB;
