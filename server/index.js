import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import postRouter from "./routers/postRouter.js";
import tagRouter from "./routers/tagRouter.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/tags", tagRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server listen: http://localhost:${PORT}`);
   mongoose
      .connect(process.env.CONNECT_STRING)
      .then((result) => {
         console.log("DB connected");
      })
      .catch((error) => {
         console.log(error);
      });
});
