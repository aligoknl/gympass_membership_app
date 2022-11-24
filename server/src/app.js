import express from "express";
import cors from "cors";

import userRouter from "./routes/user.js";
import clubRouter from "./routes/club.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/club", clubRouter);
export default app;
